describe('Test my greet function' , function(){
    it('should return "Hello, Yamisa" when called with "Yamisa"' , function(){
        assert.equal("Hello, Yamisa",greet("Yamisa"));

        // assert.deepEqual([2,2],[2,2]);
    });
    it('should return "Hello, Majija" when called with "Majija"' , function(){
        assert.equal("Hello, Majija",greet("Majija"));

        // assert.deepEqual([2,2],[2,2]);
    });

});