class Ship {
    constructor(itinerary){
    this.itinerary = itinerary;
    console.log(itinerary);
    this.currentPort = itinerary.ports[0];
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