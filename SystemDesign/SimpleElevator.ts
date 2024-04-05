//  We want to design an elevator system. What classes and functions do we need? Let's assume we're building this for a skyscraper with 100 floors.
// We need an Elevator class to represent an elevator. An elevator has a current floor, a direction, and a list of requests.

// class Building
// - elevators: Elevator[]
// - totalFloors: number

// class Elevator
// - currentFloor: number
// - direction: Direction
// - state: State

// We want an ElevatorController
// - elevators: Elevator[]
// - totalFloors: number
enum Direction {
  Up,
  Down,
  Idle
}

enum State {
  Moving,
  Stopped,
  OpeningDoors,
  ClosingDoors,
  Available
}

class Elevator {
  id: number;
  currentFloor: number;
  direction: Direction;
  state: State;

  constructor(id: number, direction: Direction, state: State) {
    this.id = id;
    this.currentFloor = 0;
    this.direction = direction;
    this.state = state;
  }

  moveUp() {
    this.currentFloor++;
    console.log(`Elevator ${this.id} moving up to floor ${this.currentFloor}`);
  }
}

class ElevatorController {
  totalElevators: number;
  totalFloors: number;
  elevators: Elevator[];

  constructor(totalElevators: number, totalFloors: number) {
    this.totalElevators = totalElevators;
    this.totalFloors = totalFloors;
    this.elevators = [];

    for (let i = 0; i < totalElevators; i++) {
      this.elevators.push(new Elevator(i, Direction.Idle, State.Available));
    }
  }

  dispatchElevator(requestedFloor: number) {
    console.log(`Elevator Controller dispatched elevator to floor: ${requestedFloor}`);

    const elevator = this.findBestElevator(requestedFloor);
    // elevator.processRequest(requestedFloor);
  }

  findBestElevator(requestedFloor: number) {
    const elevators = this.elevators.filter((elevator) => elevator.state === State.Available);
    const bestElevator = elevators[0];
    return bestElevator;
  }
}

class Requests {
  requests: number[];

  constructor(requests: number[]) {
    this.requests = requests;
  }
}

class Building {
  elevatorController: ElevatorController;
  public totalFloors: number;

  constructor(totalElevators: number, totalFloors: number) {
    this.totalFloors = totalFloors;
    this.elevatorController = new ElevatorController(totalElevators, totalFloors);
  }

  requestElevator(requestedFloor: number) {
    this.elevatorController.dispatchElevator(requestedFloor);
  }
}
