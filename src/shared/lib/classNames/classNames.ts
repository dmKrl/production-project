type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods, additional: string[]) {
    return [
        cls,
        ...Object.entries(mods).filter(([cls, value]) => Boolean(value)).map(([cls]) => cls),
        ...additional,
    ].join(' ');
}
