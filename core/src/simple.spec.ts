import { withConfig } from "."

describe(withConfig.name, () => {
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
