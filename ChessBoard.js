/*var i=1;
for(i=1;i<=16;i++)
{
  console.log(i%2===0? " " :"#");
}

//----------------------------------------------
while(i<=8)
{
  console.log(i%2===0?" ":"#");
    console.log("#"+" "+"#"+" "+"#"+" "+"#");
 // else
//    console.log("#");
  i++;
}
*/

/*
var a=" ",b="#",grid=1;
{
  while(grid<=8)
  {
    console.log((grid%2===0?a:b)+((grid+1)%2===0?a:b)+((grid+2)%2===0?a:b)+((grid+3)%2===0?a:b)+((grid+4)%2===0?a:b)+((grid+5)%2===0?a:b)+((grid+6)%2===0?a:b)+((grid+7)%2===0?a:b));
//    console.log((grid%2===0?a:b) + ((grid+1)%2===0?a:b));
    grid++;
  }
}
*/
/*
var a = " ", b = "#", grid = 1, c,guardar;
var width=8, height=8;
for(var i = 0; i < height; i++)
{
  c=grid%2===0? a : b;
  for(var j=0; j<width; j++)
  {
   // console.log(c+((grid+1)%2===0? a : b));
   //g++;
     guardar=guardar+((grid+1)%2===0?a:b);
   //guardar=guardar+(c+(grid+1)%2===0? a : b);  
  }
  guardar=guardar+"\n";
 // continue;
  grid++;
//  console.log(guardar);  
}

console.log(guardar);
*/

var size=8;
var board = "";
for(var y=0; y<size; y++)
{
  for(var x=0; x<size;x++)
  {
    if((x+y)%2==0)
      board +=" ";
    else
      board +="#";
  }
  board += "\n"
}

console.log(board);
