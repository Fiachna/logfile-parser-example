import { urlHandler } from "./url-handler"

describe('#urlHandler', () => {
  describe('when the input matches a url pattern', () => {
    const input = 'this is some matching input GET /example '

    describe('when there is no existing parsed-data', () => {
      it('populates the url section of the parsed data with the found url', () => {
        expect(urlHandler(input)).toEqual({ ipAddresses: [], urls: [{ value: '/example', count: 1 }] })
      })
    })

    describe('when there is some existing parsed data', () => {
      describe('when there is no matching existing url entry', () => {
        const data = { ipAddresses: [], urls: [{ value: '/test', count: 3 }] }

        it('adds the found url to the parsed data', () => {
          expect(urlHandler(input, data)).toEqual({ ipAddresses: [], urls: [...data.urls, { value: '/example', count: 1 }] })
        })
      })

      describe('when there is a matching existing url entry', () => {
        const data = { ipAddresses: [], urls: [{ value: '/example', count: 3 }] }

        it('increments the count of the found url', () => {
          expect(urlHandler(input, data)).toEqual({ ipAddresses: [], urls: [{ value: '/example', count: 4 }] })
        })
      })
    })
  })

  describe('when the input does not match a url pattern', () => {
    const input = 'this is some non matching input'
    const data = { ipAddresses: [], urls: [{ value: '/example', count: 3 }] }

    it('returns the existing parsed data', () => {
      expect(urlHandler(input, data)).toEqual(data)
    })
  })
})