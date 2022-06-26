export interface ParsedEntry {
  value: string,
  count: number
}

export interface ParsedData {
  ipAddresses: ParsedEntry[]
  urls: ParsedEntry[]
}