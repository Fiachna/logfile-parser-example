# Digio code test submission

## Getting Started

This is a node project, so make sure to run `npm install` or `yarn install` to install dependencies. This project was built and tested using node version 18.4.0

## Usage

Usage is quite simple, just run `npm start <filename>` or `yarn start <filename>` where filename is the path to the file you wish to parse. Note that there is no file type validation currently, it simply expects plain text during read time

## Notes

- I feel like the reporting parts of the file parser should have been split out, but at the same time it felt a bit strange...
- For expedience due to the asyncronous file handling, I've mutated some arrays. Normally I prefer to avoid mutations wherever possible, instead using copy and replace
- I've used the node readline approach which will load the file as a stream, this should allow for large file processing without blowing out a system's memory
- There are no tests around the file parser as it's primarily doing IO. Instead, I've aimed to get maximum coverage on other aspects of the application doing the transformations
