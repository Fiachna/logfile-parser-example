import { ParsedEntry } from "../../types/parsed-entry"

export const transduceSet = (set: Array<string|null>) => {
  const compactedSet = set.filter((item) => item !== null)
  return compactedSet.reduce((resultSet: ParsedEntry[], item) => {
    if (item !== null) {
      const entry = resultSet.find((result) => result.value === item)
      const filteredSet = resultSet.filter((result) => result.value !== item)

      return filteredSet.concat(entry ? { ...entry, count: entry.count + 1 } : { value: item, count: 1 })
    } else {
      return resultSet
    }
  }, [])
}