import { generateId } from "../Utils/generateId.js"
export class House {
  constructor(houseData) {
    this.id = houseData.id || generateId()
    this.price =houseData.price
    this.address = houseData.address
    this.rooms = houseData.rooms
    this.bathrooms = houseData.bathrooms
    this.sqft = houseData.sqft
    this.img = houseData.img
    this.details =houseData.details
}

get HouseTemplate(){
    return /*html*/`
    <div class="col-lg-3 mb-4 listing">
      <div class="card">
        <img src="${this.img}" alt="listing image" class="rounded">
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <span  ${this.rooms}>${this.sqft} - ${this.address}</span>
            <span>$ ${this.price}</span>
          </h5>
          <p>${this.details}</p>
        </div>
      </div>
    </div>
    `
  }
}