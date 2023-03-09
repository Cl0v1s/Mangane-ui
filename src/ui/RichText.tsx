// @ts-ignore
import sanitizeHtml from 'sanitize-html';
import { useCallback, useMemo } from "preact/hooks";
import { useInstance } from "../hooks/useInstance";
import { ICustomEmoji } from '../types/ICustomEmoji';

interface IRichText {
    children: string,
    emojis?: Array<ICustomEmoji>
}

const RichText = ({ children, emojis = [] } : IRichText) => {
    const { state: instance } = useInstance();

    const emojiRepo = useMemo(() => instance?.emojis.concat(emojis), [instance, emojis]);

    const emojize = useCallback((text: string) => {
        const matches = text.matchAll(/:([A-Za-z0-9-_+]+):/g);
        for(let match of matches) {
            const emoji = emojiRepo?.find((e) => e.shortcode === match[1]);
            text = text.replace(match[0], `<img class='inline-block align-middle w-[1rem] h-[1rem] object-contain' src='${emoji?.static_url}' alt=':${emoji?.shortcode}:' />`)
        }
        return text;
    }, []);


    const content = useMemo(() => emojize(sanitizeHtml(children)), [children]);

    return <span dangerouslySetInnerHTML={{ __html: content }} />;
};

export { RichText };