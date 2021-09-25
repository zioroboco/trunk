export type Dependencies = { process: typeof process }

type WithConfigFn = (config: { name: string }, deps?: Dependencies) => void

export const withConfig: WithConfigFn = function (config, deps) {
  const process = deps?.process ?? global.process
  process.stdout.write(`Hello ${config.name ?? "nobody"}!\n`)
}
