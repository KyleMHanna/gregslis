import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

class HouseService {

  addHouse(houseData) {
    console.log('add house in house service')
    var testHouse = new House(houseData)
    ProxyState.houses = [...ProxyState.houses, testHouse]
  }
}

export const houseService = new HouseService()