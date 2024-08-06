// Flow register
import "@parcel/babel-register/index.js"

const { Resolver } = /** @type {import('@parcel/plugin/src/PluginAPI')} */ ((await import("@parcel/plugin/src/PluginAPI.js")).default)

export default new Resolver({
  resolve({ dependency }) {
    console.log(dependency)
  }
})
