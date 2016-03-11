module.exports = function() {
  this.When(/^I click on the ([\d]*) minutes timer button$/, function(minutes) {
    this
    .click('.timer-buttons-container #minutes-'+minutes)
  })

  this.Then(/^I should see the timer at ([\d]*):00 counting down$/, function(minutes) {
    var expectedTimer = /2(5|4)\:\d\d/
    if( minutes === '35' ){ expectedTimer = /3(5|4)\:\d\d/}
    if( minutes === '15' ){ expectedTimer = /1(5|4)\:\d\d/}
    if( minutes === '5' ){ expectedTimer = /0(5|4)\:\d\d/}
    this
    .expect.element('.timer').text.to.match(expectedTimer)
  })

  this.Then(/^I should see the timer at 00:00$/, function() {
    this
    .assert.containsText('.main-content', '00:00')
  })

  this.When(/^I click on the timer$/, function() {
  })
  this.When(/^I should see the stop button$/, function() {
    this
    .click('.timer')
  })
  this.When(/^I set the timer at ([\d]*):00$/, function(minutes) {
    this
    .setValue('#timer-custom', [minutes, this.Keys.ENTER])
  })
  this.When(/^I click the stop timer button$/, function() {
  })
}
