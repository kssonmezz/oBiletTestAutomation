const { I } = inject();

module.exports = {
beniHatirlaButton: '.remember-group',
uyeGirisiButton: '.sign-up.login-to-register',
ePostaField: "//input[@name='email']",
passwordField: "//input[@name='password']",
uyeOlButton: ".register.register-button",

createNewUser: function(){
  I.waitForElement(this.beniHatirlaButton); //Check if the page is loaded
  I.waitForElement(this.uyeGirisiButton);
  I.click(this.uyeGirisiButton);
  I.waitForElement(this.ePostaField);
  I.fillField(this.ePostaField,I.generateEmail());
  I.waitForElement(this.passwordField);
  I.fillField(this.passwordField,"133875Ktb*");
  I.waitForElement(this.uyeOlButton);
  I.click(this.uyeOlButton);

}
}
