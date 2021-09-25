// @ts-check
import { jest } from "@jest/globals"
import { withConfig } from "@zioroboco/trunk"

describe(`the thing`, () => {
  let process = {
    stdout: {
      write: jest.fn(),
    },
  }

  it(`works`, () => {
    // @ts-ignore
    withConfig({ name: "blep" }, { process })
    expect(process.stdout.write).toHaveBeenCalledWith(
      expect.stringContaining("blep")
    )
  })
})
