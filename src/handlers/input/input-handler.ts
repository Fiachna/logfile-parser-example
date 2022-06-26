import { Handler } from "../../types/handler";
import { ParsedData } from "../../types/parsed-data";


export const inputHandler = (input: string, handlers: Handler[]) => {
  return handlers.reduce((parsedData: ParsedData, handler) => handler(input, parsedData), { ipAddresses: [], domains: [] })
}