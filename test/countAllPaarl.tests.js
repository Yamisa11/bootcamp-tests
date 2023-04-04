describe('Test my CountAllPaarl function' , function(){
    it('should return total number of reg.no. that start with CJ in a given string after splitting it' , function(){
        assert.equal(2,countAllPaarl("1258 CA,CJ125,475MP,CJ586"));
    });
    it('should return total number 1' , function(){
        assert.equal(1,countAllPaarl("CJMP87"));
    });
    it('should return 0' , function(){
        assert.equal(0,countAllPaarl("1256 MP,1258 CA,CS125,475MP,1258 CA,GP125,475MP"));
    });
 

});