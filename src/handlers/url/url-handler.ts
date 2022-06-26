import { Handler } from "../../types/handler";

export const urlHandler: Handler = (input, parsedData = { ipAddresses: [], urls: [] }) => {
  const urlRegex = /(?:GET|POST|PUT|DELETE|PATCH|CONNECT|HEAD|OPTIONS|TRACE)\s([/\-\:_&?=%.\w]+)/
  const match = input.match(urlRegex)

  if (match) {
    const urlEntry = parsedData.urls.find((url) => url.value === match[1])
    const filteredUrls = parsedData.urls.filter((url) => url.value !== match[1])
    const urlResult = urlEntry ? { ...urlEntry, count: urlEntry.count + 1 } : { value: match[1], count: 1 }

    return { ...parsedData, urls: filteredUrls.concat(urlResult) }
  } else {
    return parsedData
  }
}