import { parsedEntrySorter } from "./parsed-entry-sorter"

describe('#parsedEntrySorter', () => {
  it('sorts entries in descending order', () => {
    const entries = [{ value: 'a', count: 3 }, { value: 'b', count: 5 }, { value: 'c', count: 1 }]

    expect(entries.sort(parsedEntrySorter).map((value) => value.value)).toEqual(['b', 'a', 'c'])
  })
})