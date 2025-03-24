class Cylinder {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }
  
    getVolume() {
      const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
      return volume.toFixed(4);
    }
  }