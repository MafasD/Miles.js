
//  Miles.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-21 File created.   2016-11-21 Last modification.

/*  The result of the calculation is printed in four different
    ways in this program.
    
    It seems that you cannot format much with the standard
    util.format() function.

*/

const util = require( "util" ) ; // to access the util(ities) module

const tools = require( "./externals/tools.js" ) ; // for sprintf() and printf()

process.stdout.write( "\n This program prints conversion tables." 
                   +  "\n Type a letter to select the conversion table"
				   
				   + "\n m miles to kilometers"
				   + "\n p pounds to kilograms"
                   + "\n k kilometers to miles"
				   + "\n x exit the program \n" ) ;

process.stdin.on( "data", function( input_from_user )
{

   var user_selection = String( input_from_user ).charAt( 0 )  
if(user_selection == 'm' || user_selection == 'M' ) 
{
    process.stdout.write( "\n     Miles    Kilometers" );
    var  distance_in_miles  =  10 ;
      var  distance_in_kilometers = 0;
      while ( distance_in_miles < 111  )     
		  {        
              distance_in_kilometers = 1.6093 * distance_in_miles;
         tools.printf( "\n %10.2f  %10.2f",distance_in_miles, distance_in_kilometers ) ;
distance_in_miles  =  distance_in_miles  +  10 ;   
          }
}
  
  else if(user_selection == 'k' || user_selection == 'M' ) 
      {
   process.stdout.write( "\n     Kilometers    Miles" );
   var distance_in_kilometers = 10 ;
   var distance_in_kilometers = 0 ;
   while ( distance_in_kilometers < 111 ) 
   { 
       distance_in_miles = 0.6214 * distance_in_kilometers;
   tools.printf( "\n %10.2f  %10.2f", distance_in_kilometers, distance_in_miles ) ;
distance_in_kilometers = distance_in_kilometers  +  10 ; 
   } 
 
      }
    else if(user_selection == 'p' || user_selection == 'P' )
	{
    process.stdout.write( "\n     Pounds      Kilograms ");
    var Weight_in_pounds = 10 ;
	var Weight_in_Kilograms = 0 ;
	while ( Weight_in_pounds < 111 ) 
	{ 
         Weight_in_Kilograms = 0.4536 * Weight_in_pounds;
		 tools.printf( "\n %10.2f  %10.2f", Weight_in_pounds, Weight_in_Kilograms ) ;
		 Weight_in_pounds = Weight_in_pounds + 10 ;
	} 
    
	}
else if(user_selection == 'x' || user_selection == 'X' )
{  
  process.exit() ;
}
} ) ;





