const { I } = inject();

module.exports = {
loginButton: "//a[@class='login']",
flightButton: "//a[@data-event-label='Clicked Flight on Menu']",
departureField: '#origin-input',
destinationField: '#destination-input',
searchButton: '#search-button',

navigateToRegisterPage: function(){
I.waitForElement (this.loginButton);
I.click(this.loginButton);
},



navigateToFlights: function(){
I.waitForElement(this.flightButton);
I.click(this.flightButton);
},



FillTheFilghtDetail: function() {
I.waitForElement(this.departureField);
I.fillField(this.departureField,'Ankara Esenboğa Havalimanı');
I.wait(1);
I.pressKey('Enter');
I.waitForElement(this.destinationField);
I.fillField(this.destinationField,'İstanbul Tümü');
I.wait(1);
I.pressKey('Enter');
//Dates will be current date
I.waitForElement(this.searchButton);
I.click(this.searchButton);
},



chooseTheDepartureAndArrivalFlight:async function(){
  let records=await I.grabNumberOfVisibleElements("#outbound-journeys");
    if(records>0){
      I.waitForElement("(//div[@class='amount notranslate'])[1]");
      I.click("(//div[@class='amount notranslate'])[1]");
      I.waitForElement("//div[@class='code col']//strong");
        let multiChoice = await I.grabNumberOfVisibleElements("//span[text()='Primefly (PF)']");
        if(multiChoice>0){
          I.waitForElement('.fly-content-container.EF');
          I.click('.fly-content-container.EF');
        }
        else { //TO DO I have not seen the flight without multichoice }
  
  }
  let warning = await I.grabNumberOfVisibleElements("//*[contains(text(),'Seçmiş olduğunuz')]");
  if(warning>0){
    I.waitForElement("//*[contains(text(),'dönüş uçuşları için')]");
    I.click("//*[contains(text(),'dönüş uçuşları için')]");
  }
  I.waitForElement("(//ul[@id='return-journeys']//li[1])[1]");
  I.click("(//ul[@id='return-journeys']//li[1])[1]");
  let multiChoice2 = await I.grabNumberOfVisibleElements("//span[text()='Primefly (PF)']");
  if(multiChoice2>0){
    I.waitForElement('.fly-content-container.EF');
    I.click('.fly-content-container.EF');
  }
  else { //TO DO I have not seen the flight without multichoice }
}
}

}
}