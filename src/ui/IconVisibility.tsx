import { IconMail, IconLock, IconLockOpen, IconWorld } from '@tabler/icons-react';
import { MessageVisibility } from "../types/IMessage";
import { IconInstance  } from './IconInstance';

interface IIconVisibility {
    visibility: MessageVisibility,
    size?: number,
}

const IconVisibility = ({ visibility, size } : IIconVisibility) => {
    switch(visibility) {
        case "direct": {
            return <IconMail size={size} />
        }
        case "private": {
            return <IconLock size={size} />
        }
        case "unlisted": {
            return <IconLockOpen size={size} />
        }
        case "local": {
            return <IconInstance size={size} />
        }
        case "public":
        default: {
            return <IconWorld size={size} />
        }
    }
};

export { IconVisibility };