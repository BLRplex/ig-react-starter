import { generateImage } from 'jsdom-screenshot'

const commonSettings = {
  waitUntilNetworkIdle: true,
}

export const resolutions = {
  '1024x768': {
    viewport: {
      width: 1024,
      height: 768,
    },
  },
  '1280x800': {
    viewport: {
      width: 1280,
      height: 800,
    },
  },
  '1920x1280': {
    viewport: {
      width: 1920,
      height: 1280,
    },
  },
}

export default async expect => {
  const tests = Object
    .keys(resolutions)
    .map(resolution => generateImage(Object.assign(commonSettings, resolutions[resolution])))

  for (let i = 0; i < tests.length; i += 1) {
    const test = await tests[i]
    expect(test).toMatchImageSnapshot()
  }
}
