import { urlParser } from "./url-parser"

describe('#urlHandler', () => {
  describe('when the input matches a url pattern', () => {
    const input = 'this is some matching input GET /example '

    describe('when there is no existing parsed-data', () => {
      it('populates the url section of the parsed data with the found url', () => {
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