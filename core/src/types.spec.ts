import { expectType } from "ts-expect"
import { withDependencies, withGenerators } from "."

const fnOne = (config: { one: 1 }) => {}
const fnTwo = (config: { one: 1; two: 2; three?: 3 }) => {}

expectType<{ withConfig: (config: { one: 1; two: 2; three?: 3 }) => void }>(
  withGenerators([fnOne, fnTwo])
)

expectType<{ withConfig: (config: { one: 1; two: 2; three?: 3 }) => void }>(
  withDependencies({ process }).withGenerators([fnOne, fnTwo])
)

it(`passes`, () => {})
