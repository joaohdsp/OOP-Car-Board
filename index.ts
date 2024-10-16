import { Car } from "./Car";

const btnSave = document.getElementById("btnSave");
const btnList = document.getElementById("btnList");
const iptModel = document.getElementById("iptModel") as HTMLInputElement;
const iptBrand = document.getElementById("iptBrand") as HTMLInputElement;
const iptDoor = document.getElementById("iptDoor") as HTMLInputElement;
const pgrModel = document.getElementById("pgrModel") as HTMLParagraphElement;
const tblCar = document.getElementById("tblCar") as HTMLTableElement;
const iptSince = document.getElementById("iptSince") as HTMLInputElement;
const pgrSince = document.getElementById("pgrSince") as HTMLParagraphElement;
const pgrDoor = document.getElementById("pgrDoor") as HTMLParagraphElement;

// const car = { model: "", brand: "" };
// let car: { model: string; brand: string };

const cars: Car[] = [];

function saveCar() {
  const car = new Car();
  car.model = iptModel.value;
  car.brand = iptBrand.value;
  car.since = parseInt(iptSince.value);
  car.door = parseInt(iptDoor.value);
  cars.push(car);
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
        <td>${car.since}</td>
        <td>${car.door}</td>
      </tr>
    `;
  }
}

btnSave?.addEventListener("click", saveCar);
btnList?.addEventListener("click", listCar);

// const a: number = 1;
// let b: number = 2
// let c = true;
// const v = [1, 2, 5, "rohoig"];
// const t: number[] = [];

// const o = { name: "adair", email: "dafdas@gd.com" };
// o.email = "YYYY";
// console.log(JSON.stringify(o));

// function somar(a: number, b: number) {
//   return a + b;
// }
// console.log(somar(1, 2));
