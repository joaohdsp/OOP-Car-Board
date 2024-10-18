import { Vehicle } from "./Vehicle";

export class Bike extends Vehicle {
  since?: number;

  setSince(since: number) {
    if (since > 1885) throw new Error("Insira um ano válido");
    this.since = since;
  }
  getSince() {
    return this.since;
  }
}
