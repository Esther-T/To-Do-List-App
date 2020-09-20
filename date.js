 //= getDate; //no need parenthesis cause we are not calling the function

exports.getDate = function() {
  const today = new Date();
  const options = {weekday: "long",
                day: "numeric",
                month: "long"
  };
  return day = today.toLocaleDateString("en-US", options);
}

exports.getDay = function(){ //module.exports = exports
  const today = new Date();
  const options = {weekday: "long",
  };
  return day = today.toLocaleDateString("en-US", options);
}
