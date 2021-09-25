/**
 * @param {*} config
 * @param {import("@zioroboco/trunk/types").Dependencies} deps
 */
export function withConfig(config, deps) {
  const process = deps?.process ?? global.process
  process.stdout.write(`Hello ${config.name ?? "nobody"}!\n`)
}
