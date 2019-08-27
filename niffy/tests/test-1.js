var Nightmare = require("nightmare");
(function(cb) {
  var nightmare = new Nightmare({ show: true });
  nightmare
    .viewport(540, 960)
    .goto("https://demo.sightmachine.io/auth/login?next=%2F")
    .click("#email")
    .wait(200)
    .type("input#email", "sighty@sightmachine.io")
    .type("input#email", "\n")
    .type("input#password", "testing")
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
