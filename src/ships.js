class Ship {
    constructor(currentPort){
    this.currentPort = currentPort;
    this.previousPort = null;
    }      

    setSail() {
    this.previousPort = this.currentPort;    
    this.currentPort = null; 
    }   


    dock(port) {
    this.previousPort = this.currentPort;
    this.currentPort = port;
    }
 }



module.exports = {Ship}