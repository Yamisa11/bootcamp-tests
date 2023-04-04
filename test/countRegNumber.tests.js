describe('Test my CountRegNumber function' , function(){
    it('should return total number of reg.no. in a string after splitting it' , function(){
        assert.equal(3,countRegNumber("1258 CA,GP125,475MP"));
    });
    it('should return total number 1. Total of reg.nos in the param' , function(){
        assert.equal(1,countRegNumber("MP87 CA"));
    });
    it('should return 7. Total of reg.nos in the param' , function(){
        assert.equal(7,countRegNumber("1256 MP,1258 CA,GP125,475MP,1258 CA,GP125,475MP"));
    });
 

});