const {Ship} = require('../src/ships.js');
const {Port} = require('../src/ports.js');
const {Itinerary} = require('../src/itinerary.js');

describe('tests', () => {
  let ship;
  let port;
  let port2;
  let itinerary;
  beforeEach(() => {
    port = new Port('Dover')
    port2 = new Port('France North')
    itinerary = new Itinerary(port, port2)
    ship = new Ship(itinerary);
})

describe('Ship', () => {

    it('can be instantiated', () => {
      const dover = new Port('Dover');
      const itinerary = new Itinerary([dover]);
      const ship = new Ship(itinerary);
      expect(ship).toBeInstanceOf(Object);
    })

     it('should have a starting port', () => {
       const itinerary = new Itinerary([port]);
       ship = new Ship(itinerary)
     expect(ship.currentPort).toEqual(port);
    })

})

describe('setSail', () => {  
   
    it('can set sail', () => {
      const itinerary = new Itinerary([port]);
      ship = new Ship(itinerary);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toEqual(port);

})
})

describe('dock', () => {

  it('ship should dock at instructed port', () => {
    ship.dock(port2)
    expect(ship.currentPort).toEqual(port2);

  })

})

});
