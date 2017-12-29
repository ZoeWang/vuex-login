
export function keys () {
	if (!Object.keys) Object.keys = (function() {
	  var hasOwnProperty = Object.prototype.hasOwnProperty,
	    hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
	    dontEnums = [ 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor' ],
	    dontEnumsLength = dontEnums.length;
	    return function(obj) {
	      if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null)
	        throw new TypeError('Object.keys called on non-object');
	      var result = [];
	      for(var prop in obj) {
	        if (hasOwnProperty.call(obj, prop)) result.push(prop);
	      }
	      if (hasDontEnumBug) {
	        for(var i=0; i < dontEnumsLength; i++) {
	          if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
	        }
	      }
	      return result;
	    }
	  }
	)();
}

// 洗牌
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
export function shuffle(arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}