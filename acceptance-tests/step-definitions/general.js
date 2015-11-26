module.exports = function() {
  this.Given(/^I open ([^"]*)$/, function(url) {
    this.url('http://'+url)
    .waitForElementVisible('body', 5000)
  })
}
