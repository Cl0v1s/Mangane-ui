interface IColor {
    h: number,
    s: number,
    l: number,
}

interface IColors {
    accent: IColor,
    brand: IColor,
}

interface IInstance {
    logo: string,
    description: string,
}

/**
 * Defines a configuration file
 */
interface IConfig {
    'colors': IColors,
    'instance': IInstance,
}

export type { IConfig };
