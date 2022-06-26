import { parseIPAddress } from "./ip-address-parser"

describe('#ipAddressHandler', () => {
  describe('when the input matches an IP address pattern', () => {
    const input = 'this is some matching input 192.168.1.1'

    it('returns the parsed IP address', () => {
      expect(parseIPAddress(input)).toEqual('192.168.1.1')
    })
  })

  describe('when the input does not match a IP address pattern', () => {
    const input = 'this is non matching input'

    it('returns the existing parsed data', () => {
      expect(parseIPAddress(input)).toBeNull()
    })
  })
})