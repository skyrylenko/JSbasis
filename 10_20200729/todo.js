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
//console.table(objArray);
//deleteTodo(5);
console.table(objArray);
//setTodoState(2, false)
//console.table(objArray);
//console.table(objArray);
//objArray[1].id;

// let popup = document.createElement('div');
// popup.id = 'infoPopup';
// popup.classList.add('popup');
// popup.classList.toggle('visible');
// popup.innerHTML = '<i>HELLO!</i> <br> Important message.';
// const bodyEl = document.getElementsByTagName('body');
// document.body.append(popup);

function handlerSelect(event) {
    //console.log(event.currentTarget);
    //console.log(event.target);
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
    let targetId = event.target.closest(".todo");
    let id = +event.target.closest(".todo").id.slice(5);
    // console.log(targetId);
    // console.log(id);
    targetId.classList.toggle("completed");

    if (targetId.classList.contains("completed")) {
        setTodoState(id, true);
    } else {
        setTodoState(id, false);
    };
}


function handlerDelete(event) {
    let id = +event.target.closest(".todo").id.slice(5);
    let targetId = event.target.closest(".todo");
    deleteTodo(id);
    targetId.remove();
}


function createElement(inid, inuserId, instate, intitle) {
    let newElement = document.createElement("div");
    newElement.id = "todo-" + inid;
    newElement.classList.add("todo");
    if (instate) {
        newElement.classList.toggle('completed');
    }


    let container1 = document.createElement("div");
    container1.classList.add("todo-container");
    let container2 = document.createElement("div");
    container2.classList.add("todo-container");
    let title = document.createElement("p");
    title.classList.add("title");
    title.innerText = intitle;
    let span1 = document.createElement("span");
    span1.classList.add("delete-icon");


    let span2 = document.createElement("span");
    span2.classList.add("user-id");
    span2.innerText = "User User - " + inuserId;
    let span3 = document.createElement("span");
    span3.classList.add("state-icon");
    span3.addEventListener('click', handlerSelect);
    span1.addEventListener('click', handlerDelete);


    container1.append(title);
    container1.append(span1);
    container2.append(span2);
    container2.append(span3);
    newElement.append(container1);
    newElement.append(container2);
    return newElement;
}

const bodyEl = document.getElementsByTagName("body");
let newElement = "";
for (let i = 0; i < objArray.length; i++) {
    newElement = createElement(objArray[i].id, objArray[i].userId, objArray[i].completed, objArray[i].title)
    document.body.append(newElement);
}


//HomeTask #10 add ToDos by button

//const button = document.querySelector('button');
const button = document.getElementById("loadTodos");
let counter = 1;
const link = "https://jsonplaceholder.typicode.com/todos/";

button.addEventListener('click', function (event) {
    for (let i = 0; i < 20; i++) {
        counter = counter + 1;
        fetch(link + counter)
            .then(response => response.json())
            .then(json =>
            //console.log(json)
            {
                objArray.push(json);
                newElement = createElement(json.id,
                    json.userId,
                    json.completed,
                    json.title);
                document.body.append(newElement);;
            }
            )
            .catch(e => console.log('Error Happened'));
    }
}
)
