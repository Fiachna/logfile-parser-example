import { Handler } from "../../types/handler"
import { inputHandler } from "./input-handler"

describe('#inputHandler', () => {
  describe('when there is input', () => {
    const input = 'this is some input'

    describe('when there are defined handlers', () => {
      const handler: Handler = jest.fn() 

      it('runs the handlers against the input', () => {
        inputHandler(input, [handler])
        expect(handler).toHaveBeenCalledWith(input, { ipAddresses: [], urls: [] })
      })
    })
  })
})