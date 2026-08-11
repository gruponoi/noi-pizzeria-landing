import { readFile, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const clientHtmlPath = resolve('dist/index.html')
const serverEntryPath = resolve('dist-ssr/entry-server.js')
const emptyRoot = '<div id="root"></div>'

const template = await readFile(clientHtmlPath, 'utf8')
const rootOccurrences = template.split(emptyRoot).length - 1

if (rootOccurrences !== 1) {
  throw new Error(`Expected one empty root in ${clientHtmlPath}, found ${rootOccurrences}.`)
}

const { render } = await import(pathToFileURL(serverEntryPath).href)
const appHtml = render()

if (!appHtml.includes('class="hero__lead"') || !appHtml.includes('<h1>')) {
  throw new Error('The prerendered application is missing required Hero content.')
}

const prerenderedHtml = template.replace(emptyRoot, `<div id="root">${appHtml}</div>`)

await writeFile(clientHtmlPath, prerenderedHtml, 'utf8')

console.log('Prerendered the complete React application into dist/index.html.')
