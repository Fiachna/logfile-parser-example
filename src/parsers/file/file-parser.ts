import events from 'events'
import fs from 'fs'
import readline from 'readline'

import { ipAddressParser } from '../ip-address/ip-address-parser'
import { urlParser } from '../url/url-parser'

export const fileParser = async (filename: string) => {
  try {
    let urls: Array<string|null> = []
    let ipAddresses: Array<string|null> = []

    const lineReader = readline.createInterface({
      input: fs.createReadStream(filename),
      crlfDelay: Infinity
    })

    lineReader.on('line', (line) => {
      urls.push(urlParser(line))
      ipAddresses.push(ipAddressParser(line))
    })

    await events.once(lineReader, 'close')

    console.log(urls, ipAddresses)

  } catch (error) {
    console.error(error)
  }
}