import { Handler } from "../../types/handler";

export const urlHandler: Handler = (input) => {
  const urlRegex = /(?:GET|POST|PUT|DELETE|PATCH|CONNECT|HEAD|OPTIONS|TRACE)\s([/\-\:_&?=%.\w]+)/
  const match = input.match(urlRegex)

  if (match) {
    return match[1]
  } else {
    return null
  }
}