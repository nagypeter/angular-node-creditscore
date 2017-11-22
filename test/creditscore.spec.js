describe('Test UI: browser title', function() {
  it('AngularJS + NodeJS', function() {
    browser.get('http://localhost:3000/');

    expect(browser.getTitle()).toEqual('AngularJS + NodeJS');
  });
});

describe('Test score using: Peter Nagy, 5/12/1976, 111-22-3333', function() {
  it('Score result: 731', function() {
    browser.get('http://localhost:3000/');

    element(by.model('ctrl.user.firstname')).sendKeys('Peter');
    element(by.model('ctrl.user.lastname')).sendKeys('Nagy');
    element(by.model('ctrl.user.dateofbirth')).sendKeys('5/12/1976');
    element(by.model('ctrl.user.ssn')).sendKeys('111-22-3333');
    element(by.buttonText('Score')).click();

    var score = element(by.id('score_result'));

    expect(score.getText()).toEqual('731');
  });
});

function log(arg) {
  browser.call(function() {
    console.log(arg);
  });
}