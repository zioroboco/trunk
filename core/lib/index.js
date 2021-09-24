/**
 * @typedef {object} Dependencies
 * @type {{ process?: typeof process }}
 */
/**
 * @param {*} config
 * @param {Dependencies} [deps]
 */
export function withConfig(config, deps) {
  const process = deps?.process ?? global.process
  process.stdout.write(`Hello ${config.name ?? "nobody"}!\n`)
}
