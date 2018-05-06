
function addTodoItem( todoItem) {
    var obj = {};
    let sizeBefore = todoItems.length;
    if(todoItem.text !== null && (todoItem.completed === true || todoItem.completed === false))
    {
        todoItem.id=sizeBefore+1;
        console.log("Object is valid");
        obj =  Object.assign([], todoItem);
        todoItems.push(obj);
    }
    let sizeAfter = todoItems.length;

    sizeBefore !== sizeAfter ? console.log("Object was added") : console.log("Not add");
    console.log(todoItems);
}

function viewTodoList(item) {

    if(item === 'all')
    {
        console.log(todoItems)
    } else {
    var obj = {};
    todoItems.forEach(function (status) {
        var newItem = status[item];
        if(!obj[newItem])
        {
            obj[newItem] = [];
        }
        obj[newItem].push(status);
    });
    }
    return obj;
}

function deleteItem(id)
{
    if(todoItems.length === 0)
    {
        console.log("is empty")
    } else if (id > todoItems.length) {
        console.log("error, array has only ", todoItems.length, " items");
    }
    else
    {
        todoItems.splice(id-1,1);
    }
    return todoItems;
}

function editItems(id) {

    if(todoItems[id-1].completed === false)
    {
        todoItems[id-1].completed = true;
    } else console.log("element has true status");
}



var todoItem = {};
todoItem.text = "test";
todoItem.completed =  true;
addTodoItem(todoItem);

console.log(viewTodoList('all'));