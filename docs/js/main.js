/* global codecopy */

window.$docsify = {
  name: 'browserless',
  repo: 'kikobeats/browserless',
  maxLevel: 3,
  executeScript: true,
  auto2top: true,
  noEmoji: true,
  plugins: [
    function (hook, vm) {
      hook.ready(function () {
        codecopy('pre')
      })
    }
  ]
}
