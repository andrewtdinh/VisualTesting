var Nightmare = require("nightmare");
(function(cb) {
  var nightmare = new Nightmare({ show: true });
  nightmare
    .viewport(540, 960)
    .goto("https://gethoodie.com/auth")
    .click(".login")
    .wait(200)
    .type(".login-email-input", "test@testtesttest.com")
    .type(".login-password-input", "testpassword")
    .click(".login-submit")
    .wait(1000)
    .click('.item[data-name="tshirts"]')
    .screenshot("./deep-in-the-app-screenshot.png")
    .end()
    .catch(cb)
    .then(cb);
})(function(res) {
  console.log(res);
});
