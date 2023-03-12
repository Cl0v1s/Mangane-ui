import { Timelines } from "../types/IMessage";
import { get } from './../helpers/storage';

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