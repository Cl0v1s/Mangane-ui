import { useEffect } from "preact/hooks";
import { useUser } from "../../hooks/useUser";

import { Message } from "../../common/Message";

interface ITimelineView {
    timeline: string,
}

const TimelineView = ({ timeline } : ITimelineView) => {
    const { state, actions } = useUser();
    useEffect(() => {
        actions.timeline(timeline);
    }, [actions])

    return (
        <div className="p-3">
            {
                state.timelines[timeline]?.map((m) => <div key={m.id} className="my-4"><Message message={m} /></div>)
            }
        </div>
    )
};

export { TimelineView };