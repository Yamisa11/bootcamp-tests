function countAllPaarl(regNumbers){
    var splitted = regNumbers.split(',');
    var regPaarl = 0;
   
      for(let i = 0; i< splitted.length ; i++){
          
           if(splitted[i].startsWith('CJ')){
          regPaarl = regPaarl + 1;
          }
      }
      return regPaarl;
    }