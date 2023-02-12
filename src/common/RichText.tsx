// @ts-ignore
import sanitizeHtml from 'sanitize-html';
import { useCallback, useMemo } from "preact/hooks";
import { useInstance } from "../hooks/useInstance";

interface IRichText {
    children: string
}

const RichText = ({ children } : IRichText) => {
    const { state: instance } = useInstance();

    const emojis = useCallback((text: string) => {
        const matches = text.matchAll(/:([A-Za-z0-9-_+]+):/g);
        for(let match of matches) {
            const emoji = instance?.emojis.find((e) => e.shortcode === match[1]);
            text = text.replace(match[0], `<img class='inline-block align-middle w-[1rem] h-[1rem] object-contain' src='${emoji?.static_url}' alt=':${emoji?.shortcode}:' />`)
        }
        return text;
    }, []);


    const content = useMemo(() => emojis(sanitizeHtml(children)), [children]);

    return <span dangerouslySetInnerHTML={{ __html: content }} />;
};

export { RichText };