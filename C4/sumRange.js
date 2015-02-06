var range = function(start, end, step) {
  var array = [];
  var suma = 0;
 

  if(arguments.length < 3) {
    for(var i = start; i <= end; i++) {
      array[i] = i;
      suma = suma+i;
    }

    console.log("suma = " + suma);
  }

 
  else {

    if(step < 0) {
      var l = start;
      while(l >= end) {
        array[l] = l;
        console.log(" = l: "+l);
        l = l + step;       
     }
    }

    else { 
      var k = start;
      while(k <= end) {
        array[k] = k;
        k = k + step;
      }

    }
   
  }


  for(var j = start; j <= end; j++) {
//    if(array[j] !== undefined)
      console.log(array[j]);
  }
 

}

range(5, 2, -1);

