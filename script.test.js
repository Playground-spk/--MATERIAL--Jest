const {curryingMultipleWith2} = require('./script');


describe('fn curryingMultipleWith 2', () => {
    expect.assertions(2)
    it('the partial is a obviously 2', () => {
        expect(curryingMultipleWith2(1)).toEqual(2)
    });
    
    
});
