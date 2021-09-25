import { Union } from "ts-toolbelt"

export type Generator<C = {}> = (config: C) => void

/** Union of config properties from a list of generator functions. */
type ConfigUnion<Gs extends Generator<any>[]> = Union.IntersectOf<
  Parameters<Gs[number]>[0]
>

export const withGenerators = <Gs extends Generator<any>[]>(generators: Gs) => {
  return function withConfig(config: ConfigUnion<Gs>) {}
}
