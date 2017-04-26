var flight = require('./flight');

flight.setOrigin('Kensington');
flight.setDestination('London');
flight.setNumber(123);

console.log(flight.getInfo());

var anotherFlight = require('./flight');

console.log(anotherFlight.getInfo());
