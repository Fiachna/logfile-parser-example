import { urlParser } from "./url-parser"

describe('#urlHandler', () => {
  describe('when the input matches a url pattern', () => {
    describe('when the input does not include a domain', () => {
      const input = 'this is some matching input GET /example'

      it('returns the parsed url', () => {
        expect(urlParser(input)).toEqual('/example')
      })
    })

    describe('when the input includes a domain', () => {
      const input = 'this is some matching input GET https://www.example.com/example'

      it('returns the parsed url without the domain', () => {
        expect(urlParser(input)).toEqual('/example')
      })
    })
  })

  describe('when the input does not match a url pattern', () => {
    const input = 'this is some non matching input'

    it('returns the existing parsed data', () => {
      expect(urlParser(input)).toBeNull()
    })
  })
})