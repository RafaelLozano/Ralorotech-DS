type Mods = Record<string, boolean | string | number | undefined>;

export function bem(block: string) {
  return function (element?: string, modifiers?: Mods) {
    const base = element ? `${block}__${element}` : block;
    const mods =
      modifiers
        ? Object.entries(modifiers)
            .filter(([, v]) => Boolean(v))
            .map(([k, v]) =>
              typeof v === "boolean" ? `${base}--${k}` : `${base}--${k}-${v}`
            )
        : [];
    return [base, ...mods].join(" ");
  };
}
