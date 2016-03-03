module.exports = function() {
  this.When(/^I enter a new todo with "(.*)"$/, function(todoText) {
    this
    .setValue('.todo-input input', [todoText, this.Keys.ENTER])
  })

  this.Then(/^I see a new todo with "(.*)"$/, function(todoText) {
    this
    .expect.element('#todo-0').text.to.equal(todoText)
  })

  this.When(/^I complete the first todo$/, function(){
    this
    .click('#todo-check-0')
  })
  this.Then(/^I see the first todo marked as completed$/, function(){
    this
    .expect.element('#todo-check-0').to.be.selected;
  })
}
