import { IAccount  } from "./IAccount"

interface IInstance {
    domain: string,
    title: string,
    description: string,
    stats: { user_count: number },
    contact_account: IAccount,
}

export type { IInstance }