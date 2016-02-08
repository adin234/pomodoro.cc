module.exports = function() {
  this.Then(/^I interact with the timer$/, function() {
    this
    .waitForElementVisible('body', 5000)
    .assert.containsText('.main-content', '00:00')
    .click('.timer-buttons-container #minutes-25')
    .pause(1000)
    .expect.element('.timer').text.to.match(/2(5|4)\:\d\d/)
    .click('.timer-buttons-container #minutes-5')
    .pause(1000)
    .expect.element('.timer').text.to.match(/0(5|4)\:\d\d/)
    .click('.timer-buttons-container #minutes-15')
    .pause(1000)
    .expect.element('.timer').text.to.match(/1(5|4)\:\d\d/)
  })
}
