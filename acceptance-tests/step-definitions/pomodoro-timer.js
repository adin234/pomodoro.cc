module.exports = function() {
  this.When(/^I click on the ([\d]*) minutes timer button$/, function(minutes) {
    this
    .click('.timer-buttons-container #minutes-'+minutes)
  })

  this.Then(/^I should see the timer at ([\d]*):00 counting down$/, function(minutes) {
    var expectedTimer = /2(5|4)\:\d\d/
    if( minutes === '15' ){ expectedTimer = /1(5|4)\:\d\d/}
    if( minutes === '5' ){ expectedTimer = /0(5|4)\:\d\d/}
    this
    .expect.element('.timer').text.to.match(expectedTimer)
  })

  this.Then(/^I should see the timer at 00:00$/, function() {
    this
    .assert.containsText('.main-content', '00:00')
  })
}
