const objArray = [
    {
        userId: 1,
        id: 1,
        title: "Todo Item 1",
        completed: false
    },
    {
        userId: 2,
        id: 2,
        title: "Todo Item 2",
        completed: true
    },
    {
        userId: 3,
        id: 3,
        title: "Todo Item 3",
        completed: false
    },
    {
        userId: 4,
        id: 4,
        title: "Todo Item 4",
        completed: true
    },
    {
        userId: 5,
        id: 5,
        title: "Todo Item 5",
        completed: false
    }];
console.table(objArray);

function addTodo(userId, id, title, completed) {
    let objectIN = { userId: userId, id: id, title: title, completed: completed };
    console.log(objectIN);
    objArray.push(objectIN);
}

function deleteTodo(idIN) {
    /*for (let i = 0; i < objArray.length; i++) {
        if (objArray[i].id == idIN) {
            objArray.splice(i, 1);
        }
    }*/
    let delIdx = objArray.findIndex(currentValue => currentValue.id == idIN);
    objArray.splice(delIdx, 1)
}

function setTodoState(idIN, stateIN) {
    /*for (let i = 0; i < objArray.length; i++) {
        if (objArray[i].id == idIN) {
            objArray[i].completed = stateIN;
        }
    }*/
    let Idx = objArray.findIndex(currentValue => currentValue.id == idIN);
    objArray[Idx].completed = stateIN;
}
addTodo(6, 6, "Todo Item 6", false);
console.table(objArray);
deleteTodo(5);
console.table(objArray);
setTodoState(2, false)
console.table(objArray);
//console.table(objArray);
//objArray[1].id;