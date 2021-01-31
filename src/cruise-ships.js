let startingPort = undefined;
let currentPort = undefined;
let nextPort = undefined;
let previousPort = undefined;
class Ship {
    constructor(startingPort){
    this.startingPort = startingPort;
};
setSail() {
    this.startingPort = this.nextPort;
} 
}



module.exports = Ship;