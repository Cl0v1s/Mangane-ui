import { IAccount  } from "./IAccount"

interface IInstance {
    domain: string,
    title: string,
    description: string,
    stats: { user_count: number },
    email: string,
    staff: Array<IAccount>
}

export type { IInstance }