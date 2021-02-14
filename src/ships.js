class Ship {
    constructor(port){
    this.currentPort = port;
    this.previousPort = null;
    }      

    setSail() {
    this.currentPort = null;
    this.previousPort = this.currentPort; 
    }   


    dock(port) {
    this.currentPort = port;
    }
 }



module.exports = {Ship}