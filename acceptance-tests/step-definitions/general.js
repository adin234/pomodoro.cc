module.exports = function() {
  this.Given(/^I open pomodoro\.dev$/, function() {
    this.url('https://pomodoro.dev')
    .waitForElementVisible('.main-content', 5000)
  })
}
