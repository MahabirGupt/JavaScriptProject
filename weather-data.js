"use strict:";
// setting up constructor function called Weather
function Weather(cityName, description) {
  this.cityName = cityName;
  this.description = description;
  this._temperature = ""; // this is a private field. it is not passed into the constructor
} // it is equals to an empty string

Object.defineProperty(Weather.prototype, "temperature", {
  get: function () {
    return this._temperature;
  },
  set: function (value) {
    // this._temperature = (value * 1.8 + 32).toFixed(2) + "F."; //conversion formula from celcius to fahrenheit and round off to 2 d.p
    this._temperature = value.toFixed(1) + " \u00B0 c";
  }, // with the unit in Fahrenheit
}); // configure the property with a JS object
