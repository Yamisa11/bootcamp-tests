describe('Test my isWeekday function' , function(){
    it('should return "true" if the day is a weekday and false if weekend' , function(){
        assert.equal(true,isWeekday("Monday"));
    });
    it('should return "true". Friday is a weekday' , function(){
        assert.equal(true,isWeekday("Friday"));
    });
    it('should return "false". Saturday not a weekday ' , function(){
        assert.equal(false,isWeekday("Saturday"));
    });
    it('should return "false" February not a weekday ' , function(){
        assert.equal(false,isWeekday("February"));
    });

});