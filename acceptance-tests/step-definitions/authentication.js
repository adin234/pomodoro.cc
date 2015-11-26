module.exports = function() {
  this.Then(/^I login$/, function() {
    this.url('https://pomodoro.dev/auth/fake')
    .waitForElementVisible('body', 5000)
  })
  this.Then(/^I should be logged in$/, function() {
    this.assert.visible('.profile')
  })
}
