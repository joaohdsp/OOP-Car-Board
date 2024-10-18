import { Car } from "./Car";

const btnSave = document.getElementById("btnSave");
const btnList = document.getElementById("btnList");
const iptModel = document.getElementById("iptModel") as HTMLInputElement;
const iptBrand = document.getElementById("iptBrand") as HTMLInputElement;
const iptDoor = document.getElementById("iptDoor") as HTMLInputElement;
const pgrModel = document.getElementById("pgrModel") as HTMLParagraphElement;
const tblCar = document.getElementById("tblCar") as HTMLTableElement;
const pgrDoor = document.getElementById("pgrDoor") as HTMLParagraphElement;

// const car = { model: "", brand: "" };
// let car: { model: string; brand: string };

const cars: Car[] = [];

function saveCar() {
  const car = new Car(iptModel.value);

  car.brand = iptBrand.value;
  car.setDoor(Number(iptDoor.value));

  cars.push(car); // Salva o carro no array
}

// function saveCar() {
// car.model = iptModel.value;
// car.brand = iptBrand.value;
//}

function listCar() {
  let car: Car;

  tblCar.innerHTML = "";

  for (let car of cars) {
    tblCar.innerHTML += `
      <tr>
        <td>${car.model}</td>
        <td>${car.brand}</td>
        <td>${car.getDoor()}</td>
      </tr>
    `;
  }
}

btnSave?.addEventListener("click", saveCar);
btnList?.addEventListener("click", listCar);

