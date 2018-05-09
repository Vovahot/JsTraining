function show()
{
    document.getElementById("view").innerHTML = ""
    todoItems.forEach(function (data) {
        var newLi = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", "completed");
        view.appendChild(checkbox);
        for(key in data)
        {
            newLi.innerHTML += key +':  ' +data[key] + '<br>';
            view.appendChild(newLi);
            checkbox.checked = data.completed;
        }

    })
}

function deleteF() {
    document.getElementById("view").innerHTML = ""
    var text = document.getElementById("input_number").value;
    var res = deleteItem(text);
    res.forEach(function (data) {
        var newLi = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", "completed");
        view.appendChild(checkbox);
        for(key in data)
        {
            newLi.innerHTML += key +':  ' +data[key] + '<br>';
            view.appendChild(newLi);
            checkbox.checked = data.completed;
        }

    })
}

function completeT() {
    document.getElementById("view").innerHTML = ""
    var text = document.getElementById("input_number").value;
    var res = editItems(text);
    res.forEach(function (data) {
        var newLi = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", "completed");
        view.appendChild(checkbox);
        for(key in data)
        {
            newLi.innerHTML += key +':  ' +data[key] + '<br>';
            view.appendChild(newLi);
            checkbox.checked = data.completed;
        }
    })
}
function changeT() {
    document.getElementById("view").innerHTML = ""
    var text = document.getElementById("input_number").value;
    var text2 = document.getElementById("input_text").value;
    var res = editItemsText(text, text2);
    var checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "completed");
    view.appendChild(checkbox);
    res.forEach(function (data) {
        var newLi = document.createElement('li');

        for(key in data)
        {
            newLi.innerHTML += key +':  ' +data[key] + '<br>';
            view.appendChild(newLi);
            checkbox.checked = data.completed;
        }
    })
}
