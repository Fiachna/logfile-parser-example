import events from 'events'
import fs from 'fs'
import readline from 'readline'
import { ParsedData } from '../../types/parsed-data'

import { inputHandler } from '../input/input-handler'
import { ipAddressHandler } from '../ip-address/ip-address-handler'
import { urlHandler } from '../url/url-handler'

export const fileHandler = async (filename: string) => {
  try {
    let data: ParsedData[] = []

    const lineReader = readline.createInterface({
      input: fs.createReadStream(filename),
      crlfDelay: Infinity
    })

    lineReader.on('line', (line) => {
      data.push(inputHandler(line, [urlHandler, ipAddressHandler]))
    })

    await events.once(lineReader, 'close')

    console.log(data)

  } catch (error) {
    console.error(error)
  }
}