import { Handler } from "../../types/handler";

export const ipAddressHandler: Handler = (input, parsedData = { ipAddresses: [], urls: [] }) => {
  const ipRegex = /(?:^|\s)(\d+\.\d+\.\d+\.\d+)(?:$|\s)/
  const match = input.match(ipRegex)

  if (match) {
    const ipEntry = parsedData.ipAddresses.find((ip) => ip.value === match[1])
    const filteredIPs = parsedData.ipAddresses.filter((ip) => ip.value !== match[1])
    const ipResult = ipEntry ? { ...ipEntry, count: ipEntry.count + 1 } : { value: match[1], count: 1 }

    return { ...parsedData, ipAddresses: filteredIPs.concat(ipResult) }
  } else {
    return parsedData
  }
}