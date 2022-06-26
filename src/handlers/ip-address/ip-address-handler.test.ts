import { ipAddressHandler } from "./ip-address-handler"

describe('#ipAddressHandler', () => {
  describe('when the input matches an IP address pattern', () => {
    const input = 'this is some matching input 192.168.1.1'

    describe('when there is no existing parsed-data', () => {
      it('populates the IP address section of the parsed data with the found IP address', () => {
        expect(ipAddressHandler(input)).toEqual({ ipAddresses: [{ value: '192.168.1.1', count: 1 }], urls: [] })
      })
    })

    describe('when there is some existing parsed data', () => {
      describe('when there is no matching existing IP address entry', () => {
        const data = { ipAddresses: [{ value: '10.1.1.1', count: 3 }], urls: [] }

        it('adds the found IP address to the parsed data', () => {
          expect(ipAddressHandler(input, data)).toEqual({ ipAddresses: [{ value: '192.168.1.1', count: 1 }, ...data.ipAddresses], urls: [] })
        })
      })

      describe('when there is a matching existing IP address entry', () => {
        const data = { ipAddresses: [{ value: '192.168.1.1', count: 3 }], urls: [] }

        it('increments the count of the found IP address', () => {
          expect(ipAddressHandler(input, data)).toEqual({ ipAddresses: [{ value: '192.168.1.1', count: 4 }], urls: [] })
        })
      })
    })
  })

  describe('when the input does not match a IP address pattern', () => {
    const input = 'this is non matching input'
    const data = { ipAddresses: [{ value: '10.1.1.1', count: 3 }], urls: [] }

    it('returns the existing parsed data', () => {
      expect(ipAddressHandler(input, data)).toEqual(data)
    })
  })
})