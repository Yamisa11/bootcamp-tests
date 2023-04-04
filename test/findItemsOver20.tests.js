

describe('Test my findItemsOver20 function' , function(){
    it('should return an array with items that have quantity bigger than 20' , function(){
        let fruitsEaten = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        assert.deepEqual([{ name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 }],findItemsOver20(fruitsEaten));

    });
    it('should return 4 items in array with qty bigger than 20' , function(){
        let fruitsEaten2 = [
            {name : 'apples', qty : 30},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 21},
        ];
        assert.deepEqual([{name : 'apples', qty : 30},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 21}],findItemsOver20(fruitsEaten2));

    });
    it('should return an empty array. no items in array' , function(){
        let fruitsEaten3 = [
        ];
        assert.deepEqual([],findItemsOver20(fruitsEaten3));

    });
});