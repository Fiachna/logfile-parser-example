import { ParsedEntry } from "../../types/parsed-entry"

export const parsedEntrySorter = (a: ParsedEntry, b: ParsedEntry) => {
  return b.count - a.count
}