module.exports = function() {
  this.When(/^I start a 25 minutes timer$/, function() {
    this
    .waitForElementVisible('.main-content', 5000)
    .assert.containsText('.main-content', '00:00')
    .click('#minutes-25')
  })
  this.When(/^I stop a 25 minutes timer$/, function() {
    this
    .click('.timer-buttons-container #minutes-25')
  })
  this.Then(/^I should see the timer at 25:00 counting down$/, function() {
    this
    .waitForElementVisible('.main-content', 5000)
    .expect.element('.timer').text.to.match(/2(5|4)\:\d\d/)
  })
  this.Then(/^I should see the timer at 00:00$/, function() {
    this
    .waitForElementVisible('.main-content', 5000)
    .assert.containsText('.main-content', '00:00')
  })
  this.Then(/^I interact with the timer$/, function() {
    this
    .waitForElementVisible('.main-content', 5000)
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
