
function findMatching(drivers, name) {
  const newArray = drivers.filter( function(driver) { 
      return driver.toLowerCase() === name.toLowerCase() 
    });
  return newArray;
}


function fuzzyMatch(drivers, str) {
  const newArray = drivers.filter( function(driver) { 
      return driver.slice(0, str.length).toLowerCase() === str.toLowerCase() 
    });
  return newArray;
}

function matchName(drivers, str) {
  const newArray = drivers.filter( function(driver) { 
      return driver.name.toLowerCase() === str.toLowerCase() 
    });
  return newArray;
}

