const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  array.find(function(game) {return game.result === "W"})
}
