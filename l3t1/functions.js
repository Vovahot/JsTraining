
function Machine(power) {
    this._power = power;
    this._enabled = false;
    var self = this;
    this.enable = function() { self._enabled = true; };
    this.disable = function() { self._enabled = false; };
}

function fridge(power)
{
    Machine.apply(this, arguments);

    var foodItemList = [];
    var maxQuality = power / 100;
    console.log(maxQuality);


    this.getFoodItems = function()
    {
        var clonedArray = JSON.parse(JSON.stringify(foodItemList));
        console.log("foodItemsList_  ",foodItemList.splice(1,0));
        return clonedArray;

    }

    this.setFoodItems = function()
    {
        if (!this._enabled) {
            alert('Enable the machine');
            return;
        }
        if(foodItemList.length < maxQuality)
        {
            for(var i = 0; i < arguments.length; i++)
            {
                foodItemList.push(arguments[i]);
            }
            alert(maxQuality - foodItemList.length + " are left");

        } else alert("Fridge is full!");

    }
}

///var fridge = new fridge(300);