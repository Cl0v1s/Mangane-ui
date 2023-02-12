import { IPartialAccount  } from "./IAccount"
import { ICustomEmoji } from "./ICustomEmoji"

interface IInstance {
    domain: string,
    title: string,
    description: string,
    stats: { user_count: number },
    email: string,
    staff: Array<IPartialAccount>,
    emojis: Array<ICustomEmoji>
}

export type { IInstance }