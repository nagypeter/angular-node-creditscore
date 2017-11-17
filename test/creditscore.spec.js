describe('Credit Score AngularJS demo web application test', function() {
  it('Test scoring', function() {
    browser.get('http://127.0.0.1:3000/');

    expect(browser.getTitle()).toEqual('AngularJS + NodeJS');
    element(by.model('ctrl.user.firstname')).sendKeys('Peter');
    element(by.model('ctrl.user.lastname')).sendKeys('Nagy');
    element(by.model('ctrl.user.dateofbirth')).sendKeys('5/12/1976');
    element(by.model('ctrl.user.ssn')).sendKeys('111-22-3333');
    element(by.buttonText('Score')).click();

    var score = element(by.id('score_result'));
    score.getText().then(function(text) {
      console.log('Credit Score result:' + text);
    });

    expect(score.getText()).toEqual('731');
  });
});

function log(arg) {
  browser.call(function() {
    console.log(arg);
  });
}