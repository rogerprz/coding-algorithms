// interface IElevator {
//   id: number;
//   totalFloors: number;
//   currentFloor: number;
//   direction: string;
//   requests: number[];
// }

// enum Direction {
//   Up = 'up',
//   Down = 'down',
//   Idle = 'idle'
// }

// enum ElevatorStatus {
//   Moving = 'moving',
//   Idle = 'idle'
// }

// class Elevator {
//   id: number;
//   totalFloors: number;
//   currentFloor: number;
//   direction: Direction;
//   state: ElevatorStatus;
//   requests: number[];

//   constructor(id: number, totalFloors: number) {
//     this.id = id;
//     this.totalFloors = totalFloors;
//     this.currentFloor = 0;
//     this.direction = Direction.Up;
//     this.state = ElevatorStatus.Idle;
//     this.requests = [];
//   }

//   private moveUp() {
//     if (this.currentFloor < this.totalFloors) {
//       setTimeout(() => this.move(), 1000);
//       this.currentFloor++;
//       console.log(`Elevator ${this.id} moving up to floor ${this.currentFloor}`);
//     }
//   }

//   private moveDown() {
//     if (this.currentFloor > 0) {
//       setTimeout(() => this.move(), 1000);
//       this.currentFloor--;
//       console.log(`Elevator ${this.id} moving down to floor ${this.currentFloor}`);
//     }
//   }

//   public processRequest(requestedFloor: number) {
//     this.requests.push(requestedFloor);
//     this.requests.sort((a: number, b: number) => a - b);
//     if (this.direction === Direction.Idle) {
//       this.direction = this.requests[0] > this.currentFloor ? Direction.Up : Direction.Down;
//       this.move();
//     }
//   }

//   private move() {
//     if (this.requests.length === 0) {
//       this.direction = Direction.Idle;
//       return;
//     }

//     const nextFloor = this.requests[0];
//     if (nextFloor > this.currentFloor) {
//       this.moveUp();
//     } else if (nextFloor < this.currentFloor) {
//       this.moveDown();
//     } else {
//       this.requests.shift();
//       if (this.requests.length > 0) {
//         this.direction = this.requests[0] > this.currentFloor ? Direction.Up : Direction.Down;
//         this.move();
//       } else {
//         this.direction = Direction.Idle;
//       }
//     }
//     setTimeout(() => this.move(), 1000);
//   }
// }

// class ElevatorController {
//   elevators: Elevator[];
//   requests: number[];
//   constructor(totalElevators: number, totalFloors: number) {
//     this.elevators = [];
//     this.requests = [];

//     for (let i = 0; i < totalElevators; i++) {
//       this.elevators.push(new Elevator(i, totalFloors));
//     }
//   }

//   requestElevator(requestedFloor: number) {
//     console.log(`Elevator Controller dispatched elevator to floor: ${requestedFloor}`);
//     const elevator = this.findBestElevator(requestedFloor);
//     elevator.processRequest(requestedFloor);
//   }

//   findBestElevator(requestedFloor: number) {
    // Find elevator that is idle
//     const elevators = this.elevators.filter((elevator) => elevator.direction === Direction.Idle);
//     if (elevators.length > 0) {
//       console.log(`Calling idle elevator:${elevators[0].id} to floor ${requestedFloor}`);
//       return elevators[0];
//     }

    // Find elevator that is going in the same direction as requested floor
//     const elevatorsGoingUp = this.elevators.filter(
//       (elevator) => elevator.direction === Direction.Up && elevator.currentFloor < requestedFloor
//     );

    // If there is an elevator going up and the requested floor is above the current floor, return that elevator
//     if (elevatorsGoingUp.length > 0) {
//       console.log(`Calling going up elevator:${elevatorsGoingUp[0].id} to floor ${requestedFloor}`);
//       return elevatorsGoingUp[0];
//     }

//     // Find elevator that is going in the same direction as requested floor
//     const elevatorsGoingDown = this.elevators.filter(
//       (elevator) => elevator.direction === Direction.Down && elevator.currentFloor > requestedFloor
//     );

//     // If there is an elevator going down and the requested floor is below the current floor, return that elevator
//     if (elevatorsGoingDown.length > 0) {
//       console.log(`Calling going down elevator:${elevatorsGoingDown[0].id} to floor ${requestedFloor}`);
//       return elevatorsGoingDown[0];
//     }

//     console.log(`No other elevators, calling elevator:${this.elevators[0].id} to floor ${requestedFloor}`);
//     // If all else fails, return first elevator
//     return this.elevators[0];
//   }
// }

// class Building {
//   elevatorController: ElevatorController;

//   constructor(public totalFloors: number, public totalElevators: number) {
//     this.totalFloors = totalFloors;
// this.elevatorController = new ElevatorController(totalElevators, totalFloors);
// console.log(`Building with ${totalFloors} floors and ${totalElevators} elevators created`);
//   }

//   requestElevator(requestedFloor: number) {
//     console.log(`Elevator requested on floor ${requestedFloor}`);
//     this.elevatorController.requestElevator(requestedFloor);
//   }
// }

// const building = new Building(10, 2);
// building.requestElevator(5);
// building.requestElevator(3);
// building.requestElevator(7);
// building.requestElevator(2);
// building.requestElevator(8);
// building.requestElevator(1);
