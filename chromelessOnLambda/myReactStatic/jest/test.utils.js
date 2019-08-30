import { Chromeless } from 'chromeless'

export const setup = () => {
  jest.setTimeout(10000)
  return new Chromeless(global.config.chromeless)
}

export const teardown = async chromeless => {
  try {
    await chromeless.end()
  } catch (err) {
    console.log(err)
  }
}