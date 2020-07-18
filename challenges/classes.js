// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume() {
    const { length, width, height } = this;
    return length * width * height;
  }

  surfaceArea() {
    const { length, width, height } = this;
    return 2 * (length * width + length * height + width * height);
  }
}

const cuboid = new CuboidMaker(4, 5, 5);
console.log(cuboid);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
  constructor(sideLength) {
    super();
    this.sideLength = sideLength;
  }

  surfaceArea() {
    return 6 * this.sideLength ** 2;
  }

  volume() {
    return this.sideLength ** 3;
  }
}

const cube = new CubeMaker(4, 4, 4);

console.log(cube.volume());
console.log(cube.surfaceArea());
