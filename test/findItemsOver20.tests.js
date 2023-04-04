let fruitsEaten = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

describe('Test my findItemsOver20 function' , function(){
    it('should return an array with items that have quantity bigger than 20' , function(){
        assert.deepEqual([{ name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 }],findItemsOver20(fruitsEaten));

    });
    
});