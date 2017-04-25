
/*
 * GET home page.
 */
let flights = require('../data');
 let flight = require('../flight');

//  let flight1 = flight({
// 	number: 1,
// 	origin: 'LAX',
// 	destination: 'DCA',
//   departs: '9AM',
//   arrives: '4PM'
// });
//
// let flight2 = flight({
// 	number: 2,
// 	origin: 'LAX',
// 	destination: 'PDX',
//   departs: '10AM',
//   arrives: '12PM'
// });


for(let number in flights){
    flights[number] = flight(flights[number]);
};

exports.flight = function(req, res){
  let number = req.param('number');
  if (typeof flights[number] === 'undefined') {
    res.status(404).json({status: 'error'});
  } else {
    res.json(flights[number].getInformation());
  }
};

exports.arrived = function(req, res){
  let number = req.param('number');
  if (typeof flights[number] === 'undefined') {
    res.status(404).json({status: 'error'});
  } else {
    flights[number].triggerArrive();
    res.json({status: 'arrived!'});
  }
};

// exports.flight1 = function(req, res){
//   res.json(flight1.getInformation());
// };
//
// exports.flight2 = function(req, res){
//   res.json(flight2.getInformation());
// };
