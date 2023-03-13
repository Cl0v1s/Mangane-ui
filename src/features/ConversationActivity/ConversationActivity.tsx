import { useCallback, useEffect, useState } from "preact/hooks";
import { Routes, useParams } from "react-router-dom";

import { IMessage, IMessageWithChildren, IPartialMessage } from "../../types/IMessage";

import { context } from "../../services/message";

import { ConversationView } from "./ConversationView";

const ConversationActivity = () => {
    const { id } = useParams();
    const [conversation, setConversation] = useState<IMessageWithChildren | null>(null);
    const [message, setMessage] = useState<IMessage | null>(null);

    useEffect(() => {
        if(!id) return;
        (async () => {
            const { parent, current } = await context({ id });
            setConversation(parent);
            setMessage(current);
            console.log(parent);
            console.log(current);
        })();
    }, [id]);

    return (
        <Routes>

        </Routes>
    )
}

export { ConversationActivity };