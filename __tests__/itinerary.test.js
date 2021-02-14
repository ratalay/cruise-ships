const {Itinerary} = require('../src/itinerary.js');
const {Port} = require('../src/ports.js');
//const {Ship} = require('../src/ships.js')

describe('tests', () => {
    let itinerary;
    let dover;
    let calais;
    beforeEach(() => {
        itinerary = new Itinerary([dover, calais]);
        dover = new Port('Dover');
        calais = new Port ('Calais');
    })
describe('Itinerary', () => {
    it('can be instantiated', () => {
        expect(itinerary).toBeInstanceOf(Object);
    })
   it('can have ports', () => {
        expect(itinerary.ports).toEqual([dover, calais]);  
      })
   })
})