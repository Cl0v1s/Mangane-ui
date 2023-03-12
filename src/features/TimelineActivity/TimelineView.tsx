import { useCallback, useEffect, useMemo, useRef, useLayoutEffect } from "preact/hooks";
import { useUser } from "../../hooks/useUser";

import { Message } from "../../common/Message";

interface ITimelineView {
    timeline: string,
}

const TimelineView = ({ timeline } : ITimelineView) => {
    const { state, actions } = useUser();
    const root = useRef<HTMLDivElement>(null);
    const currentRequest = useRef<undefined | Promise<void>>(undefined);

    const messages = useMemo(() => state.timelines[timeline], [state.timelines]);

    const load = useCallback(async (o : Array<IntersectionObserverEntry>) => {
        if(currentRequest.current || !messages || messages.length === 0 || !o[0].isIntersecting) return;
        try {
            currentRequest.current = actions.timeline(timeline, undefined, messages[messages.length - 1].id, true);
            await currentRequest.current;
        } catch (e) {
            // TODO: handle errors gracefully 
            console.error(e);
        } finally {
            currentRequest.current = undefined;
        }
    }, [messages]);

    // load messages when component is mounted
    useEffect(() => {
        actions.timeline(timeline);
    }, [actions]);

    useLayoutEffect(() => {
        if(!root.current || !messages) return undefined;
        const observer = new IntersectionObserver(load, {});

        const index = Math.floor(messages.length * 0.75);
        const m = messages[index];
        const trigger = (root.current as HTMLDivElement).querySelector(`#message-${m.id}`);
        if(trigger) {
            observer.observe(trigger);
        } 
        return () => observer.disconnect();
    }, [load, messages]);

    return (
        <div ref={root} className="p-3 overflow-y-auto overflow-x-hidden">
            {
                messages?.map((m) => <div key={m.id} id={`message-${m.id}`} className="my-4"><Message message={m} /></div>)
            }
        </div>
    )
};

export { TimelineView };