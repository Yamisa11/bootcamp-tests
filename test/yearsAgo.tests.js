describe('Test my yearsAgo function' , function(){
    it('should return number of years between number provided and current year' , function(){
        assert.equal(3,yearsAgo("2020"));
    });
    it('should return total number 23 when called with 2000' , function(){
        assert.equal(23,yearsAgo("2000"));
    });
    it('should return 2023 when called with 0' , function(){
        assert.equal(2023,yearsAgo("0"));
    });
 

});