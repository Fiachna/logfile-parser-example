import { ipAddressHandler } from "./ip-address-handler"

describe('#ipAddressHandler', () => {
  describe('when the input matches an IP address pattern', () => {
    const input = 'this is some matching input 192.168.1.1'

    describe('when there is no existing parsed-data', () => {
      it('populates the IP address section of the parsed data with the found IP address', () => {
        expect(ipAddressHandler(input)).toEqual('192.168.1.1')
      })
    })
  })

  describe('when the input does not match a IP address pattern', () => {
    const input = 'this is non matching input'

    it('returns the existing parsed data', () => {
      expect(ipAddressHandler(input)).toBeNull()
    })
  })
})