var number, origin, destination;

exports.setNumber = function (num) {
  number = num;
};

exports.setOrigin = function (o) {
  origin = o;
};

exports.setDestination = function (d) {
  destination = d;
};

exports.getInfo = function () {
  return {
    number: number,  // these are not the same as the above (could be n:number, o:origin,ct)
    origin: origin,
    destination: destination
  }
}
