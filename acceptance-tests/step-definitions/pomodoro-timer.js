module.exports = function() {
  this.Then(/^I interact with the timer$/, function() {
    this
    .waitForElementVisible('body', 5000)
    .click('.timer-buttons-container #minutes-25')
    .assert.containsText('.main-content', '25:00')
    .expect.element('.timer').text.to.match(/2(5|4)\:\d\d/)
    .click('.timer-buttons-container #minutes-5')
    .expect.element('.timer').text.to.match(/0(5|4)\:\d\d/)
    .click('.timer-buttons-container #minutes-15')
    .expect.element('.timer').text.to.match(/1(5|4)\:\d\d/)
  })
}
