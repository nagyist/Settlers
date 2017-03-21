import Player from './player'
import Tiles from './tiles'
import Roads from './roads'
import Bank from './bank'
import Nodes from './nodes'

class Game {

  constructor(options) {
    this.bank = new Bank()
    this.players = []
    this.tilesArray = []
    this.roadsArray = []
    this.initialRobberIndex = undefined
    this.nodesArray = []
    this.setup()
  }

  setup() {
    const player1 = new Player({name: "Craig", colour: "blue"})
    this.players.push(player1)
    const player2 = new Player({name: "Matthew", colour: "red"})
    this.players.push(player2)
    const player3 = new Player({name: "Beth", colour: "white"})
    this.players.push(player3)
    const player4 = new Player({name: "Simon", colour: "yellow"})
    this.players.push(player4)

    const tiles = new Tiles()
    this.tilesArray = tiles.tilesArray
    this.initialRobberIndex = tiles.indexOfDesert
    const roads = new Roads()
    this.roadsArray = roads.roadsArray
    const nodes = new Nodes()
    this.nodesArray = nodes.nodesArray

    ///////// just for testing purposes /////////

    const wood = this.bank.generateResourceCard("wood")
    const wood1 = this.bank.generateResourceCard("wood")
    const wood2 = this.bank.generateResourceCard("wood")
    const wood3 = this.bank.generateResourceCard("wood")
    const wood4 = this.bank.generateResourceCard("wood")
    const wood5 = this.bank.generateResourceCard("wood")
    const wood6 = this.bank.generateResourceCard("wood")
    const wood7 = this.bank.generateResourceCard("wood")
    const wood8 = this.bank.generateResourceCard("wood")
    const wood9 = this.bank.generateResourceCard("wood")
    const wood10 = this.bank.generateResourceCard("wood")
    const wood11 = this.bank.generateResourceCard("wood")
    const clay = this.bank.generateResourceCard("clay")
    const clay1 = this.bank.generateResourceCard("clay")
    const clay2 = this.bank.generateResourceCard("clay")
    const clay3 = this.bank.generateResourceCard("clay")
    const clay4 = this.bank.generateResourceCard("clay")
    const clay5 = this.bank.generateResourceCard("clay")
    const clay6 = this.bank.generateResourceCard("clay")
    const clay7 = this.bank.generateResourceCard("clay")
    const clay8 = this.bank.generateResourceCard("clay")
    const clay9 = this.bank.generateResourceCard("clay")
    const clay10 = this.bank.generateResourceCard("clay")
    const clay11 = this.bank.generateResourceCard("clay")
    const crop = this.bank.generateResourceCard("crop")
    const crop1 = this.bank.generateResourceCard("crop")
    const crop2 = this.bank.generateResourceCard("crop")
    const crop3 = this.bank.generateResourceCard("crop")
    const crop4 = this.bank.generateResourceCard("crop")
    const crop5 = this.bank.generateResourceCard("crop")
    const crop6 = this.bank.generateResourceCard("crop")
    const crop7 = this.bank.generateResourceCard("crop")
    const crop8 = this.bank.generateResourceCard("crop")
    const crop9 = this.bank.generateResourceCard("crop")
    const crop10 = this.bank.generateResourceCard("crop")
    const sheep = this.bank.generateResourceCard("sheep")
    const sheep1 = this.bank.generateResourceCard("sheep")
    const sheep2 = this.bank.generateResourceCard("sheep")
    const sheep3 = this.bank.generateResourceCard("sheep")
    const sheep4 = this.bank.generateResourceCard("sheep")
    const sheep5 = this.bank.generateResourceCard("sheep")
    const sheep6 = this.bank.generateResourceCard("sheep")
    const sheep7 = this.bank.generateResourceCard("sheep")
    const sheep8 = this.bank.generateResourceCard("sheep")
    const sheep9 = this.bank.generateResourceCard("sheep")
    const sheep10 = this.bank.generateResourceCard("sheep")
    const rock = this.bank.generateResourceCard("rock")
    const rock1 = this.bank.generateResourceCard("rock")
    const rock2 = this.bank.generateResourceCard("rock")
    const rock3 = this.bank.generateResourceCard("rock")
    const rock4 = this.bank.generateResourceCard("rock")
    const rock5 = this.bank.generateResourceCard("rock")
    const rock6 = this.bank.generateResourceCard("rock")
    const rock7 = this.bank.generateResourceCard("rock")
    const rock8 = this.bank.generateResourceCard("rock")
    const rock9 = this.bank.generateResourceCard("rock")
    const rock10 = this.bank.generateResourceCard("rock")
    
    player1.resourceCards.push(wood)
    player1.resourceCards.push(wood1)
    player1.resourceCards.push(wood2)
    player1.resourceCards.push(wood3)
    player1.resourceCards.push(wood10)
    player1.resourceCards.push(wood11)
    player1.resourceCards.push(clay)
    player1.resourceCards.push(clay1)
    player1.resourceCards.push(clay2)
    player1.resourceCards.push(clay3)
    player1.resourceCards.push(clay10)
    player1.resourceCards.push(clay11)
    player1.resourceCards.push(sheep)
    player1.resourceCards.push(sheep1)
    player1.resourceCards.push(crop)
    player1.resourceCards.push(crop1)
    player1.resourceCards.push(rock)
    player1.resourceCards.push(rock1)
    player1.resourceCards.push(rock2)

    player2.resourceCards.push(wood4)
    player2.resourceCards.push(wood5)
    player2.resourceCards.push(clay4)
    player2.resourceCards.push(clay5)
    player2.resourceCards.push(sheep3)
    player2.resourceCards.push(sheep4)
    player2.resourceCards.push(crop3)
    player2.resourceCards.push(crop4)
    player2.resourceCards.push(rock3)
    player2.resourceCards.push(rock4)

    player3.resourceCards.push(wood6)
    player3.resourceCards.push(wood7)
    player3.resourceCards.push(clay6)
    player3.resourceCards.push(clay7)
    player3.resourceCards.push(sheep5)
    player3.resourceCards.push(sheep6)
    player3.resourceCards.push(crop5)
    player3.resourceCards.push(crop6)
    player3.resourceCards.push(rock5)
    player3.resourceCards.push(rock6)

    player4.resourceCards.push(wood8)
    player4.resourceCards.push(wood9)
    player4.resourceCards.push(clay8)
    player4.resourceCards.push(clay9)
    player4.resourceCards.push(sheep7)
    player4.resourceCards.push(sheep8)
    player4.resourceCards.push(crop7)
    player4.resourceCards.push(crop8)
    player4.resourceCards.push(rock7)
    player4.resourceCards.push(rock8)

    /////////////////////////////////
  }

  giveResourceCardToPlayer(player, type) {
    const newResCard = this.bank.generateResourceCard(type)
    player.resourceCards.push(newResCard)
    console.log('card', newResCard)
  }

  letPlayerBuildRoad(player) {
    if (player.freeRoadCount) {
      player.freeRoadCount -= 1
      player.roadsAvailable -= 1
      return true
    }

    if (player.roadsAvailable === 0) {
      return false
    }
    let woodIndex = undefined
    let clayIndex = undefined
    for (let i = 0; i < player.resourceCards.length; i++) {
      if (player.resourceCards[i].type === "wood") {
        woodIndex = i
      }
      if(player.resourceCards[i].type === "clay") {
        clayIndex = i
      }
    }

    if (woodIndex !== undefined && clayIndex !== undefined) {
      player.roadsAvailable -= 1
      if (clayIndex > woodIndex) {
        player.resourceCards.splice(clayIndex, 1)
        player.resourceCards.splice(woodIndex, 1)
        return true
      } else {
        player.resourceCards.splice(woodIndex, 1)
        player.resourceCards.splice(clayIndex, 1)
        return true
      } 
    }
    return false
  }

  letPlayerBuildSettlement(player) {
    if (player.freeSettlementCount) {
      player.freeSettlementCount -= 1
      player.settlementsAvailable -= 1
      player.score += 1
      return true
    }

    if (player.settlementsAvailable === 0) {
      return false
    }
    let woodIndex = undefined
    let clayIndex = undefined
    let cropIndex = undefined
    let sheepIndex = undefined
    let indices = []
    for (let i = 0; i < player.resourceCards.length; i++) {
      if (player.resourceCards[i].type === "wood") {
        woodIndex = i
      }
      if(player.resourceCards[i].type === "clay") {
        clayIndex = i
      }
      if(player.resourceCards[i].type === "crop") {
        cropIndex = i
      }
      if(player.resourceCards[i].type === "sheep") {
        sheepIndex = i
      }
    }
    indices.push(...[woodIndex, clayIndex, cropIndex, sheepIndex])
    indices = indices.filter((index) => { 
      return index != undefined 
    })

    if (indices.length === 4) {
      indices.sort((a, b) => {
        return b - a
      })

      indices.forEach((index) => {
        player.resourceCards.splice(index, 1)
      })

      player.settlementsAvailable -= 1
      player.score += 1

      return true
    }
    return false
  }

  letPlayerBuildCity(player) {
    if (player.citiesAvailable === 0) {
      return false
    }
    let cropCount = 0
    let rockCount = 0
    let indices = []
    for (let i = 0; i < player.resourceCards.length; i++) {
      if (player.resourceCards[i].type === "rock") {
        rockCount += 1
        if (rockCount <= 3) {
          indices.push(i)
        }
      }
      if(player.resourceCards[i].type === "crop") {
        cropCount += 1
        if (cropCount <= 2) {
          indices.push(i)
        }
      }
    }
    if (rockCount >= 3 && cropCount >= 2) {
      indices.sort((a, b) => {
        return b - a
      })
      indices.forEach((index) => {
        player.resourceCards.splice(index, 1)
      })
      player.citiesAvailable -= 1
      player.settlementsAvailable += 1
      player.score += 1

      return true
    }
    return false
  }

  radar(player, index) {
    const node = this.nodesArray[index]
    const nodeCoordinates = node.coordinates
    this.tilesArray.forEach((tile) => {
      const tileCoordinates = tile.coordinates
      if (Math.abs(nodeCoordinates[0] - (tileCoordinates[0] + 60)) < 100 && Math.abs(nodeCoordinates[1] - (tileCoordinates[1] + 69) ) < 100) {
        player.conqueredTiles.push(tile)
      }
    })
  }

  mapConstructionAround(player, index) {
    const node = this.nodesArray[index]
    const nodeCoordinates = node.coordinates
    //////// BLOCK SURROUNDING NODES ///////////////////////////////
    this.nodesArray.forEach((surrNode) => {
      const surroundingNodeCoordinates = surrNode.coordinates
      if (Math.abs(nodeCoordinates[0] - (surroundingNodeCoordinates[0] + 12)) < 80 && Math.abs(nodeCoordinates[1] - (surroundingNodeCoordinates[1] + 12) ) < 90) {
        surrNode.allowConstruction = false
      }
    })
    //////// GET SURROUNDING ROADS ALLOWED TO BE BUILT //////////////
    this.roadsArray.forEach((surrRoad) => {
      const surroundingRoadCoordinates = surrRoad.coordinates
      if (Math.abs(nodeCoordinates[0] - (surroundingRoadCoordinates[0] + 12)) < 60 && Math.abs(nodeCoordinates[1] - (surroundingRoadCoordinates[1] + 12) ) < 60) {
        player.roadsAllowed.push(surrRoad.index)
      }
    }) 
  }

  mapNextPossibleRoads(player, index) {
    const road = this.roadsArray[index]
    const roadCoordinates = road.coordinates
    if (road.angle === 0) {
      this.roadsArray.forEach((surrRoad) => {
        const surroundingRoadCoordinates = surrRoad.coordinates
        if (Math.abs(roadCoordinates[0] - (surroundingRoadCoordinates[0] + 4)) < 60 && Math.abs(roadCoordinates[1] - (surroundingRoadCoordinates[1] + 19) ) < 80) {
          player.roadsAllowed.push(surrRoad.index)
        }
      })
    }
    if (road.angle === 60) {
      this.roadsArray.forEach((surrRoad) => {
        const surroundingRoadCoordinates = surrRoad.coordinates
        if (Math.abs(roadCoordinates[0] - (surroundingRoadCoordinates[0] + 4)) < 80 && Math.abs(roadCoordinates[1] - (surroundingRoadCoordinates[1] + 19) ) < 80) {
          player.roadsAllowed.push(surrRoad.index)
        }
      })
    }
    if (road.angle === -60) {
      this.roadsArray.forEach((surrRoad) => {
        const surroundingRoadCoordinates = surrRoad.coordinates
        if (Math.abs(roadCoordinates[0] - (surroundingRoadCoordinates[0] + 4)) < 80 && Math.abs(roadCoordinates[1] - (surroundingRoadCoordinates[1] + 19) ) < 80) {
          player.roadsAllowed.push(surrRoad.index)
        }
      })
    }
  }

}


export default Game