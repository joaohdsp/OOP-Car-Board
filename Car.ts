import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
  door?: number;

  setDoor(door: number) {
    if (door > 6) {
      throw new Error("A quantidade de portas deve ser menor que 6");
    }
    this.door = door;
  }

  getDoor() {
    return this.door;
  }
}
