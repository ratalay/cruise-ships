const {Port} = require('../src/ports.js')

describe('Port', () => {
    it('should create a port object with a name', () => {
        let port = new Port('Dover');
        expect(port).toBeInstanceOf(Object);
    })
    it('should have a name property', () => {
        let port = new Port('Dover');
        expect(port.name).toEqual('Dover');
    })
})