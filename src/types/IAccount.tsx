interface IPartialAccount {
    id: string,
}

interface IAccount extends IPartialAccount {
    username: string,
    acct: string,
    display_name: string,
    locked: boolean,
    bot: boolean,
    discoverable: boolean,
    created_at: string,
    note: string,
    url: string,
    avatar: string,
    avatar_static: string,
    header: string,
    header_static: string,
    followers_counter: number,
    following_count: number,
    statuses_count: number,
    last_status_at: string,
    fields: [{
        name: string,
        value: string,
        verified_at: string | null,
    }]
}

export function isPartial(account: IAccount | IPartialAccount) {
    return !((account as any).username)
}

export type { IAccount, IPartialAccount };