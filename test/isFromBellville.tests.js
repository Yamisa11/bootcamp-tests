describe('Test my isFromBellvile function' , function(){
    it('should return "true" if the reg.no. is from Bellville (starts with CY)and false if not' , function(){
        assert.equal(true,isFromBellville("CY1258"));

     
    });
    it('should return "false" the reg.no. starts with CA not CY' , function(){
        assert.equal(false,isFromBellville("CA1258"));
    });
    it('should return "false" the reg.no. ends with CY' , function(){
        assert.equal(false,isFromBellville("1235CY"));
    });

});