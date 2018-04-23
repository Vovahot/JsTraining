// x^2 -2x - 3 = 0

var a = 1872;

if(a === 2)
{
	console.log(true);
} else {

	for(var i=2; i<a ; i++)
		{
			if( (a%i) == 0)
		{
			console.log(false);
			break;
		} else console.log(true); break;
	}
}