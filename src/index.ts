import { Command } from 'commander'
import { fileParser } from './parsers/file/file-parser';

const app = new Command();

app
  .name("Fiachna's fancy parsing thingo")
  .description("Submission for Digio code test by Fiachna Carter")
  .version('1.0.0')

app
  .argument('filename')
  .description('filename to parse')
  .action(fileParser)

app.parse()
