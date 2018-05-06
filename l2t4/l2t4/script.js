
function compareString(str1, str2) {
    var counter = 0;

    var abc;
    if(str1.length === str2.length){

        var newStr1 = str1.split("");
        var newStr2 = str2.split("");

        for(var i=0; i < newStr1.length; i++)
        {
            abc = newStr2.indexOf(newStr1[i])
            if(abc !== -1)
                counter++;
        }
        if(counter === newStr1.length)
            console.log(true);

    } else console.log(false);

}

/*function compareString(str1, str2){


    if(str1.length === str2.length){

        console.log(str1.length);
        var newStr1 = str1.split("");
        var newStr2 = str2.split("");

        for(var i = 0; i < newStr1.length; i++){
            for(var j =0; j < newStr2.length; j++){


                if(newStr1[i] == newStr2[j])
                    counter++;

            }
        }
        if(counter === newStr1.length)
        {console.log(counter);
            console.log(true);}

        else console.log(false)

    } else { console.log(false)}
}*/

compareString('lemonw', 'melwon');