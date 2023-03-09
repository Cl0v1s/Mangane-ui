import { useMemo } from "preact/hooks";

import { useConfig } from "../hooks/useConfig";

interface IIcon {
    size?: number,
    color?: string,
}

const IconInstance = ({ size = 24, color = 'currentColor' }: IIcon) => {
    const { state: config } = useConfig();

    const logo = useMemo(() => {
        return atob(config.instance.logo);
    }, []);

    return (
        <div style={{color, width: `${size}px`, height: `${size}px`}} dangerouslySetInnerHTML={{__html: logo }} />
    );
}

export { IconInstance };