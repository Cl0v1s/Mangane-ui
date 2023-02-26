import { useState } from 'preact/hooks';
import { Route, Routes } from 'react-router-dom';
import { Timelines } from '../../types/IMessage';

import { TimelineView } from './TimelineView';

const TimelineActivity = () => {
    return (
        <Routes>
            <Route index element={<TimelineView timeline={Timelines.home} />} />
        </Routes>
    );
}

export { TimelineActivity };