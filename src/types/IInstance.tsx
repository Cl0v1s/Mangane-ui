import { IPartialAccount  } from "./IAccount"

interface IInstance {
    domain: string,
    title: string,
    description: string,
    stats: { user_count: number },
    email: string,
    staff: Array<IPartialAccount>
}

export type { IInstance }