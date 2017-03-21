class Node {
  constructor(options) {
    this.coordinates = options["coordinates"]
    this.surroundingTiles = []
    this.colour = undefined
    this.classOfNode = 'node'
    this.hasSettlement = false
    this.hasCity = false
    this.allowConstruction = true
    this.surroundingRoads = []
  }
}

export default Node