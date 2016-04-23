module.exports = function() {
  this.When(/^I go to the login page$/, function() {
    this
    .waitForElementVisible('body', 5000)
    .click('a[href="/login"]')
    .assert.containsText('.main-content', 'Howdy!')
  })
  this.Then(/^I should see the login page$/, function() {
    this
    .waitForElementVisible('body', 5000)
    .assert.containsText('.main-content', 'Howdy!')
  })
  this.Then(/^I login$/, function() {
    this
    .waitForElementVisible('body', 5000)
    .url('https://pomodoro.dev/auth/fake')
  })
  this.Then(/^I should be logged in$/, function() {
    this.assert.visible('.profile')
  })
}
