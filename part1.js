// part 1

class Robot {
  constructor({ x, y, direction, inputString }) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.inputArray = inputString.split("", inputString.length);   //to convert input string to array
    
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
  //rotating right
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

  // mapping to move the spaceCraft based on the entered String
  
  handleMoving() {
    for (let i = 0; i < this.inputArray.length; i++) {
      switch (this.inputArray[i]) {
        case "F":
          this.handleMovingForward();
          console.log("F", { x: this.x, y: this.y, direction: this.direction });
          break;

        case "B":
          this.handleMovingBackward();
          console.log("B", { x: this.x, y: this.y, direction: this.direction });
          break;

        case "R":
          this.handleMovingRight();
          console.log("R", { x: this.x, y: this.y, direction: this.direction });
          break;

        case "L":
          this.handleMovingLeft();
          console.log("L", { x: this.x, y: this.y, direction: this.direction });
          break;
      }
    }
  }
}


// to test this class enter x,y,direction and string here

const newRobot = new Robot({
  x: 4,
  y: 2,
  direction: "east",
  inputString: "FLFFFRFLB",
});
newRobot.handleMoving();



























