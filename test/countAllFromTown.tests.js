describe('Test my CountAllFromTown function' , function(){
    it('should return total number of reg.no. that start with locIndicator(second param) in a given string after splitting it' , function(){
        assert.equal(2,countAllFromTown("1258 CA,CJ125,475MP,CJ586,GP698","CJ"));
    });
    it('should return total number 1. Only 1 reg.no from GP' , function(){
        assert.equal(1,countAllFromTown("CA 887,GP 158","GP"));
    });
    it('should return 0. None start with L' , function(){
        assert.equal(0,countAllFromTown("1256 MP,1258 CA,CS125,475MP,1258 CA,GP125,475MP","L"));
    });
 

});