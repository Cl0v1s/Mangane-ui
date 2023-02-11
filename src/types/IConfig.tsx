interface IColor {
    h: number,
    s: number,
    l: number,
}

interface IColors {
    accent: IColor,
    brand: IColor,
}

interface ILink {
    label: string, 
    url: string,
}

interface IInstance {
    logo: string,
    description: string,
    links: Array<ILink>,
}



/**
 * Defines a configuration file
 */
interface IConfig {
    'colors': IColors,
    'instance': IInstance,
}

export type { IConfig };
