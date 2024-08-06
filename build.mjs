// Flow register
import "@parcel/babel-register/index.js"

import * as fs from "node:fs"
import * as path from "node:path"
import * as url from "node:url"
import * as module from "node:module"

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const { NodeFS } = /** @type {import('@parcel/fs/src/index')} */ ((await import("@parcel/fs/src/index.js")).default)
const { ParcelV3, toFileSystemV3 } = /** @type {import('@parcel/core/src/index')} */ ((await import("@parcel/core/src/index.js")).default)
const { NodePackageManager } = /** @type {import('@parcel/package-manager/src/index')} */ ((await import("@parcel/package-manager/src/index.js")).default)

const parcel = new ParcelV3({
  fs: toFileSystemV3(new NodeFS()),
  nodeWorkers: 1,
  packageManager: new NodePackageManager(toFileSystemV3(new NodeFS()), __dirname),
  entries: [path.join(__dirname, 'src', 'index.js')],
  corePath: path.join('node_modules', '@parcel', 'core')
})

const result = await parcel.build()

console.log(result)
