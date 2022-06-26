import { Handler } from "../../types/handler";

export const ipAddressHandler: Handler = (input) => {
  const ipRegex = /(?:^|\s)(\d+\.\d+\.\d+\.\d+)(?:$|\s)/
  const match = input.match(ipRegex)

  if (match) {
    return match[1]
  } else {
    return null
  }
}