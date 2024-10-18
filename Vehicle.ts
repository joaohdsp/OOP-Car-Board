export abstract class Vehicle {
    model: string;
    brand?: string;
  
    constructor(model: string) {
      if (model.length < 2) {
        throw new Error("O nome deve conter mais que 2 carecteres");
      }
      this.model = model;
    }
  }
  