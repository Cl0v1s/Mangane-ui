import { IAccount } from "./IAccount"
import { ICustomEmoji } from "./ICustomEmoji"

export const Timelines = {
    discover: "discover",
    local: "local",
    bubble: "bubble",
    home: "home",
}

interface IMedia {
    id: string,
    type: "audio" | "video" | "gifv" | "image" | "unknown",
    url: string,
    preview_url: string,
    remote_url?: string,
    description: string,
    blurhash: string, // a hash to generate colorfull images when ressource not downloaded
}

interface IPoll {
    id: string,
    exprires_at: Date,
    expired: boolean,
    multiple: boolean,
    votes_count: number,
    voters_count?: number,
    voted?: boolean,
    own_votes?: Array<number>,
    options: Array<{
        title: string,
        votes_count?: number
    }>,
    emojis: Array<ICustomEmoji>

}

interface ICard {
    url: string,
    title: string,
    description: string,
    type: "photo" | "video" | "link" | "rich",
    author_name: string,
    author_url: string,
    provider_name: string,
    provider_url: string,
    html: string,
    width: number,
    height: number,
    image?: string,
    embed_url: string,
    blurhash?: string,
}

interface ITag {
    name: string,
    url: string,
}

interface IMention {
    id: string,
    username: string,
    url: string,
    acct: string,
}

interface IMessage {
    // base
    id: string,
    created_at: Date,
    sensitive: boolean,
    spoiler_text?: string,
    visibility: "public" | "unlisted" | "private" | "direct" | "local",
    language?: string,
    uri: string,
    url: string,
    content: string,
    text?: string, // what user originally typed when current user input
    account: IAccount,
    media_attachments: Array<IMedia>,
    poll?: IPoll,
    card?: ICard, 
    tags: Array<ITag>,
    emojis: Array<ICustomEmoji>,
    mentions: Array<IMention>,

    // meta 
    reblog?: IMessage, // to reblog when emit a new message with the reblog property set to the reblogged message

    // stats 
    replies_count: number,
    reblogs_count: number,
    favourites_count: number,
    favourited: boolean,
    reblogged: boolean,
    bookmarked: boolean,
    muted: boolean,
    application?: {
        name: string,
        website?: string,
    }

    // reply
    in_reply_to_id?: string,
    in_reply_to_account_id?: string,
}

export type { IMessage }; 