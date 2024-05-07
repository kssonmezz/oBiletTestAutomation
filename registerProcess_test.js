Feature('User Registration');

Scenario('New user registration',   ({ I, mainPagePage, registerPagePage }) => {

    I.navigateToMainPage();
    mainPagePage.navigateToRegisterPage();
    registerPagePage.createNewUser();
    I.wait(4);
    I.quitDriver();
});

Scenario('Search Flight Ticket',  async ({ I, mainPagePage }) => {

    I.navigateToMainPage();
    mainPagePage.navigateToFlights();
    mainPagePage.FillTheFilghtDetail();
    await mainPagePage.chooseTheDepartureAndArrivalFlight

});