describe('Test my fromWhere function' , function(){
    it('should return name of town of the reg.no when called with the "regNo"' , function(){
        assert.equal("Bellville",fromWhere("CY201"));

    });
    it('should return Cape Town".Reg.no starts with CA' , function(){
        assert.equal("Cape Town",fromWhere("CA8795"));
    });
    it('should return Paarl.Reg.no starts with CJ' , function(){
        assert.equal("Paarl",fromWhere("CJ4568"));
    });
    it('should return Some other place!.Reg.no starts with GP' , function(){
        assert.equal("Some other place!",fromWhere("GP4568"));
    });
});