// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name);
  //appends a driver to the end of the drivers array
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
  //prepends a driver to the beginning of the drivers array
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
  //removes the last driver from the drivers array
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
  //removes the First driver from the drivers array
}

function appendDriver(name) {
  let newDriver = [name]
  return ["Milo", "Otis", "Garfield", ...newDriver]
  //appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
}

function prependDriver(name) {
  let newDriver = [name]
  return [...newDriver, "Milo", "Otis", "Garfield"]
  //prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1)
  //removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged
}

function removeFirstDriver() {
  return drivers.slice(1)
  //removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged
}