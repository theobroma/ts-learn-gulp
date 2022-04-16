// https://fettblog.eu/void-in-javascript-and-typescript/
function doSomething(callback: () => void) {
  // at this position, callback always returns undefined
  let c = callback();
  //c is also of type undefiend
}

// this function returns a number
function aNumberCallback(): number {
  return 2;
}

// works 👍 type safety is ensured in doSometing
doSomething(aNumberCallback);
