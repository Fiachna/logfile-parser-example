import events from 'events'
import fs from 'fs'
import readline from 'readline'
import { parsedEntrySorter } from '../../sorters/parsed-entry/parsed-entry-sorter'
import { transduceSet } from '../../transducers/set/set-transducer'

import { parseIPAddress } from '../ip-address/ip-address-parser'
import { parseUrl } from '../url/url-parser'

export const fileParser = async (filename: string) => {
  try {
    let urls: Array<string|null> = []
    let ipAddresses: Array<string|null> = []

    const lineReader = readline.createInterface({
      input: fs.createReadStream(filename),
      crlfDelay: Infinity
    })

    lineReader.on('line', (line) => {
      urls.push(parseUrl(line))
      ipAddresses.push(parseIPAddress(line))
    })

    await events.once(lineReader, 'close')

    console.log(transduceSet(urls).sort(parsedEntrySorter), transduceSet(ipAddresses).sort(parsedEntrySorter))

  } catch (error) {
    console.error(error)
  }
}