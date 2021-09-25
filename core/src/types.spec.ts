import { expectType } from "ts-expect"
import { withGenerators } from "."

const fnOne = (config: { one: 1 }) => {}
const fnTwo = (config: { one: 1; two: 2; three?: 3 }) => {}

expectType<(config: { one: 1; two: 2; three?: 3 }) => void>(
  withGenerators([fnOne, fnTwo])
)

it(`passes`, () => {})
