describe('Test my totalPhoneBilltion' , function(){
    it('should return total amount of bill (sms&calls cost) in a given string after splitting it' , function(){
        assert.equal("R4.05",totalPhoneBill("sms, call, sms"));
    });
    it('should return total number R0.65. (sms)' , function(){
        assert.equal("R0.65",totalPhoneBill("sms"));
    });
    it('should return R2.75. (call)' , function(){
        assert.equal("R2.75",totalPhoneBill("call"));
    });
    it('should return "indicate sms/call" when called with video' , function(){
        assert.equal("indicate sms/call",totalPhoneBill("video"));
    });

});