module.exports = function() {
  this.When(/^I login$/, function() {
    this
    .waitForElementVisible('body', 5000)
    .click('a[href="/login"]')
    .assert.containsText('.main-content', 'Howdy!')
    .url('https://pomodoro.dev/auth/fake')
  })
  this.Then(/^I should be logged in$/, function() {
    this.assert.visible('.profile')
  })
}
