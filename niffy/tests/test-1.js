var Nightmare = require("nightmare");
(function(cb) {
  var nightmare = new Nightmare({ show: true });
  nightmare
    .viewport(540, 960)
    .goto("https://demo.sightmachine.io/auth/login?next=%2F")
    .click("#email")
    .wait(200)
    .type("input#email", "psychie@sightmachine.io")
    .wait(500)
    .type("body", "\u000d")
    .type("input#password", "testing")
    .click("button[type='submit']")
    .wait(1000)
    .screenshot("./login-with-error.png")
    .end()
    .catch(cb)
    .then(cb);
})(function(res) {
  console.log(res);
});
