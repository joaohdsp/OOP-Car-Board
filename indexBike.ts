import { Bike } from "./Bike";

const btnSave = document.getElementById("btnSave");
const btnList = document.getElementById("btnList");
const iptModel = document.getElementById("iptModel") as HTMLInputElement;
const iptBrand = document.getElementById("iptBrand") as HTMLInputElement;
const pgrModel = document.getElementById("pgrModel") as HTMLParagraphElement;
const tblBike = document.getElementById("tblBike") as HTMLTableElement;
const iptSince = document.getElementById("iptSince") as HTMLInputElement;
const pgrSince = document.getElementById("pgrSince") as HTMLParagraphElement;

// const car = { model: "", brand: "" };
// let car: { model: string; brand: string };

const bikes: Bike[] = [];

// function saveCar() {
// car.model = iptModel.value;
// car.brand = iptBrand.value;
//}

function saveBike() {

  const since = parseInt(iptSince.value);

  const bike = new Bike(
    iptModel.value
  );
  

  bike.brand = iptBrand.value;
  bike.since = since;

  bikes.push(bike);
}

function listBike() {
  if (tblBike) {
    tblBike.innerHTML = ""; // Agora é seguro atribuir
    for (let bike of bikes) {
      tblBike.innerHTML += `
          <tr>
            <td>${bike.model}</td>
            <td>${bike.brand}</td>
            <td>${bike.getSince()}</td>
          </tr>
        `;
    }
  } else {
    console.error("tblBike não encontrado.");
  }
}

btnSave?.addEventListener("click", saveBike);
btnList?.addEventListener("click", listBike);

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
