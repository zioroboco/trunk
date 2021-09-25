import type * as fs from "fs/promises"

export type Dependencies = {
  fs?: typeof fs
  process?: typeof process
}
