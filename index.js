class Elevator {
  constructor(name, currentFloor) {
    this.name = name;
    this.currentFloor = currentFloor;
  }

  moveTo(floor) {
    console.log(`${this.name} is moving to floor ${floor}`);
    this.currentFloor = floor;
  }

  getDistanceTo(floor) {
    return Math.abs(this.currentFloor - floor);
  }
}

class ElevatorSystem {
  constructor(elevators) {
    this.elevators = elevators;
  }

  callElevator(floor) {
    let closestElevator = null;
    let minDistance = Infinity;

    for (const elevator of this.elevators) {
      const distance = elevator.getDistanceTo(floor);

      if (distance < minDistance) {
        closestElevator = elevator;
        minDistance = distance;
      }
    }

    closestElevator.moveTo(floor);
  }
}

// Пример использования
const elevatorA = new Elevator("A", 0);
const elevatorB = new Elevator("B", 8);

const elevatorSystem = new ElevatorSystem([elevatorA, elevatorB]);

// Вызываем лифт на этаж 1
elevatorSystem.callElevator(1);
