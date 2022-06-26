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

    const urlSet = transduceSet(urls).sort(parsedEntrySorter)
    const ipAddressSet = transduceSet(ipAddresses).sort(parsedEntrySorter)

    console.info('Top 3 URLs by visits:\n', urlSet.slice(0,3).map((url) => url.value).join('\n'))
    console.info('Top 3 IP Addresses by activity:\n', ipAddressSet.slice(0,3).map((url) => url.value).join('\n'))
    console.info('Total IP Address count:', ipAddressSet.length)

  } catch (error) {
    console.error(error)
  }
}