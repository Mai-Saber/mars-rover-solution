// part 2

class Robot {
  constructor({ x, y, direction, inputString, obstacles }) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.inputArray = inputString.split("", inputString.length);
    this.obstacles = obstacles;
  }

  //moving///

  //forward
  handleMovingForward() {
    switch (this.direction) {
      case "north":
        this.y += 1;
        break;
      case "east":
        this.x += 1;
        break;
      case "south":
        this.y -= 1;
        break;
      case "west":
        this.x -= 1;
        break;
      default:
        console.log("error here in handleMovingForward");
    }
  }

  //backward
  handleMovingBackward() {
    switch (this.direction) {
      case "north":
        this.y -= 1;
        break;
      case "east":
        this.x -= 1;
        break;
      case "south":
        this.y += 1;
        break;
      case "west":
        this.x += 1;
        break;
      default:
        console.log("error here in handleMovingBackward");
    }
  }
  // rotating right
  handleMovingRight() {
    switch (this.direction) {
      case "north":
        this.direction = "east";
        break;
      case "east":
        this.direction = "south";
        break;
      case "south":
        this.direction = "west";
        break;
      case "west":
        this.direction = "north";
        break;
      default:
        console.log("error here in handleMovingRight");
    }
  }
  // rotating left
  handleMovingLeft() {
    switch (this.direction) {
      case "north":
        this.direction = "west";
        break;
      case "west":
        this.direction = "south";
        break;
      case "south":
        this.direction = "east";
        break;
      case "east":
        this.direction = "north";
        break;
      default:
        console.log("error here in handleMovingLeft");
    }
  }
 
//   to check if the spacecraft crashed into the obstacle
  
  checkObstacles() {
    for (let i = 0; i < this.obstacles.length; i++) {
      if (this.obstacles[i][0] === this.x && this.obstacles[i][1] === this.y) {
        return true;
      }
    }
  }

  
  handleMoving() {
    for (let i = 0; i < this.inputArray.length; i++) {
//     check if there is an obstacle, make a reverse movement and stop, if there is no obstacle, continue walking according to the input string
      if (this.checkObstacles()) {
        
        switch (this.inputArray[i]) {
          case "F":
            this.handleMovingBackward();  // to make it take a reverse step and stop
            console.log(" Oops,stopped !", {
              x: this.x,
              y: this.y,
              direction: this.direction,
            });
            break;
            
          case "B":
            this.handleMovingForward();   // to make it take a reverse step and stop
            console.log(
              { x: this.x, y: this.y, direction: this.direction },
              "stopped !"
            );
            break;
        }
        break;
      } else {
        switch (this.inputArray[i]) {
          case "F":
            this.handleMovingForward();
            console.log("F", {
              x: this.x,
              y: this.y,
              direction: this.direction,
            });
            break;

          case "B":
            this.handleMovingBackward();
            console.log("B", {
              x: this.x,
              y: this.y,
              direction: this.direction,
            });
            break;

          case "R":
            this.handleMovingRight();
            console.log("r", {
              x: this.x,
              y: this.y,
              direction: this.direction,
            });
            break;

          case "L":
            this.handleMovingLeft();
            console.log("l", {
              x: this.x,
              y: this.y,
              direction: this.direction,
            });
            break;
            
          default:
            console.log(" sorry, this character doesn't mean direction ")
        }
      }
    }
  }
}

// to test this class 
const newRobot = new Robot({
  x: 2,
  y: 4,
  direction: "east",
  inputString: "FLFFFRFLB",
  obstacles: [
    [1, 4],
    [3, 5],
    [7, 4],
  ],
});
newRobot.handleMoving();
