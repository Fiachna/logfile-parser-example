import { Parser } from "../../types/parser";

function trimmedUrl(url: string): string {
  const domainRegex = /^https?:\/\/[\w.]+/
  return url.replace(domainRegex, '')
}

export const urlParser: Parser = (input) => {
  const urlRegex = /(?:GET|POST|PUT|DELETE|PATCH|CONNECT|HEAD|OPTIONS|TRACE)\s([/\-\:_&?=%.\w]+)/
  const match = input.match(urlRegex)

  if (match) {
    return trimmedUrl(match[1])
  } else {
    return null
  }
}