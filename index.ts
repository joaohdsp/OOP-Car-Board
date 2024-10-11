import { Car } from "./Car";

const btnSave = document.getElementById("btnSave");
const btnList = document.getElementById("btnList");
const iptModel = document.getElementById("iptModel") as HTMLInputElement;
const iptBrand = document.getElementById("iptBrand") as HTMLInputElement;
const pgrModel = document.getElementById("pgrModel") as HTMLParagraphElement;
const tblCar = document.getElementById("tblCar") as HTMLTableElement;

// const car = { model: "", brand: "" };
//let car: { model: string; brand: string };

const cars: Car[] = [];

function saveCar() {
  const car = new Car();
  car.model = iptModel.value;
  car.brand = iptBrand.value;

  cars.push(car);
}
// function saveCar() {
// car.model = iptModel.value;
// car.brand = iptBrand.value;
//}

function listCar() {
  pgrModel.innerText = "Carro digitado: " + JSON.stringify(cars);

  let car: Car;

  tblCar.innerHTML = "";

  for (car of cars) {
    tblCar.innerHTML =
      tblCar.innerHTML +
      `<tr> <td>${car.model}</td> <td>${car.brand}</td> </tr>`;
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
