// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    navigateToMainPage: function () {
     this.amOnPage('https://www.obilet.com/');
     this.waitForElement('#origin-input'); // Wait for departure point input (If the page load correctly.)
  },
    quitDriver: function(){
      this.quitDriver();
    },

    generateEmail: function() {
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let email = '';
    for (let i = 0; i < 10; i++) {
        email += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    email += '@example.com'; // You can replace example.com with any valid domain
    
    return email;
  },
  });
}
