module.exports = function() {
  this.When(/^I click on Docs$/, function() {
    this
    .click('#docs-link')
  })

  this.Then(/^I should see the documentation page$/, function() {
    this
    .waitForElementVisible('.content', 5000)
    .expect.element('.content').text.to.match(/Generated with apidoc/)
  })
}
