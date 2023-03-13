import { IMessage, Timelines, IMessageWithChildren, IPartialMessage } from "../types/IMessage";
import { get } from './../helpers/storage';

function explore(current: IMessage, messages: Array<IMessage>): IMessageWithChildren {
    const children: Array<IMessage> = messages.filter((m) => m.in_reply_to_id === current.id).map((m) => explore(m, messages));
    return {
        ...current,
        children,
    }
}

export async function status(message: IPartialMessage) {
    const target = new URL(`/api/v1/statuses/${message.id}/context`, import.meta.env.VITE_INSTANCE_URL);
    const response = await fetch(
        target,
        {
            headers: {
                'Authorization': `Bearer ${get().accessToken}`
            }
        }
    );
    return response.json();
}

export async function context(partial: IPartialMessage) {
    const message = status(partial);
    const target = new URL(`/api/v1/statuses/${partial.id}/context`, import.meta.env.VITE_INSTANCE_URL);
    const response = await fetch(
        target,
        {
            headers: {
                'Authorization': `Bearer ${get().accessToken}`
            }
        }
    );
    const { ancestors, descendants }: { ancestors: Array<IMessageWithChildren>, descendants: Array<IMessageWithChildren>} = await response.json();
    const messages = [...ancestors, ...descendants];
    const parent = explore(messages.find((m) => !m.in_reply_to_id) as IMessage, messages);
    return {
        parent,
        current: await message,
    }
}

export async function timeline(tl: string, limit = 20, max_id: string | undefined = undefined) {
    let url = "", params = { limit, max_id } as any;
    // TODO: reply_visibilities
    switch(tl) {
        case Timelines.local: {
            url = "public",
            params = {
                ...params,
                local: true,
            }
            break;
        }
        case Timelines.bubble: {
            url = "bubble",
            params = {
                ...params,
            }
            break;
        }
        case Timelines.home: {
            url = "home",
            params = {
                ...params,
            }
            break;
        }
        case Timelines.discover: {
            url = "public",
            params = {
                ...params,
                remote: true,
            }
            break;
        }
        default: {
            url = "public",
            params = {
                ...params,
                instance: tl
            }
            break;
        }
    }

    const target = new URL(`/api/v1/timelines/${url}`, import.meta.env.VITE_INSTANCE_URL);
    Object.keys(params).forEach((k) => {
        if(params[k] !== undefined) target.searchParams.append(k, params[k])
    });
    const response = await fetch(
        target,
        {
            headers: {
                'Authorization': `Bearer ${get().accessToken}`
            }
        }
    );
    return response.json();
}