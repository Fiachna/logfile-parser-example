import { transduceSet } from "./set-transducer"

describe('#setTransducer', () => {
  describe('when the set has null entries', () => {
    const inputSet = ['a', null, null]

    it('ignores null entries', () => {
      expect(transduceSet(inputSet)).toEqual([{ value: 'a', count: 1 }])
    })
  })

  describe('when the set has no duplicate entries', () => {
    const inputSet = ['a', 'b', 'c']

    it('returns the same results as there were entries', () => {
      expect(transduceSet(inputSet).map((value) => value.value)).toEqual(inputSet)
    })

    it('returns a count of 1 for all entries', () => {
      expect(transduceSet(inputSet).map((value) => value.count)).toEqual([1, 1, 1])
    })
  })

  describe('when the set has duplicate entries', () => {
    const inputSet = ['a', 'a', 'b']
    it('returns a set with only unique results', () => {
      expect(transduceSet(inputSet).map((value) => value.value)).toEqual(['a', 'b'])
    })

    it('returns a count of duplicates against their entry', () => {
      expect(transduceSet(inputSet).map((value) => value.count)).toEqual([2, 1])
    })
  })
})