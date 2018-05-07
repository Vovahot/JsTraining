var arr = [-1, 3, 5, -5, -7, 9];
var arr2 = [1, 1, 2, 3, 3, 5,5,7];
function func1(array)
{
    var p= [];
    var otr = [];
    array.forEach(function (item) {
        item < 0 ? p.push(item) : otr.push(item);
    })
    console.log(p,otr);

}

function func2(arr2)
{
    for(var i =0; i<arr2.length; i++){
        var counter = 0;
        for(var j =0; j < arr2.length; j++)
        {
            if(arr2[i] === arr2[j])
                counter++;
        }
        console.log(arr2[i] + " present " + counter + " times ");
    }

}


func1(arr);
func2(arr2);

