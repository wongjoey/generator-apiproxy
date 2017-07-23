
const ApiProxyGenerator = require('../api-proxy-generator')
const rootPkg = require('../../package.json')

module.exports = class extends ApiProxyGenerator {
  writing () {
    this.fs.extendJSON(this.destinationPath(this.options.generateInto, 'package.json'), {
      devDependencies: {
        nsp: rootPkg.devDependencies.nsp
      },
      scripts: {
        prepublish: 'nsp check -o summary',
        posttest: 'nsp check -o summary'
      }
    })
  }
}
