const Ship = require('../src/cruise-ships.js');

/*describe('tests', () => {
  let ship;
  beforeEach(() => {
    ship = new Ship();
})}*/

describe('Ship', () => {
    it('can be instantiated', () => {
      expect(new Ship()).toBeInstanceOf(Object);
    })
    it('should have a starting port', () => {
      const ship = new Ship('Dover');
     expect(ship.startingPort).toEqual('Dover');
    })
})