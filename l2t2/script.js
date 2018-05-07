var arr = [1, 1, 2, 3, 3, 5,5,7];


for(var i =0; i<arr.length; i++){
    var counter = 0;
    for(var j =0; j < arr.length; j++)
    {
        if(arr[i] === arr[j])
            counter++;
    }
    console.log(arr[i] + " present " + counter + " times ");
}

