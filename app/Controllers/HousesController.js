import { ProxyState } from "../AppState"
import { getHouseFormTemplate  } from "../forms/houseform.js"
import { houseService } from "../Services/HouseService.js"
function _drawHouses() {
  let template = ''
  ProxyState.houses.forEach(house=> template+=house.HouseTemplate)

}

export class HousesController {
  constructor() {
    ProxyState.on('houses',_drawHouses)
  }

  addHouse() {
    event.preventDefault()
  /**
     * @type {HTMLFormElement}
     */
    const form = event.target
    
    const houseData = {
      price: form.price.value,
      address: form.address.value,
      rooms: form.room.value,
      bathrooms: form.bathrooms.value,
      sqft: form.sqft.value,
      img: form.img.value,
      detals: form.details.value
    }
    try {
      houseService.addHouse(houseData)
    } catch (e) {
      form.make.classList.add('border-danger')
      console.error('[TODO] you were supposed to do this', e)
      return
    }
  }


  showHouses() {
    _drawHouses()
    document.getElementById('controls').innerHTML = `
      <button class="btn btn-success" onclick="app.housesController.toggleHouseForm()">Add House</button>
    `
    document.getElementById('forms').innerHTML = getHouseFormTemplate()
  }

  toggleHouseForm() {
    console.log('[TODO fill me in]')
    document.getElementById('house-form').classList.toggle('visually-hidden')
  }

}