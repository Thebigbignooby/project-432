import { hello } from './hello.world'

describe('testing jest', () => {
  test('hello world', async () => {
    const res = await hello()
    expect(res).toEqual('hello world')
  })
})
