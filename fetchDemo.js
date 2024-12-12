const getJSON = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = response.json();
    return data;
}
getJSON().then( (data)=>{
    const listOfTodos = document.querySelector("ul");
    data.forEach(todos =>{
        var userId = todos.userId;
        var id = todos.id;
        var title = todos.title;
        var completed = todos.completed;

        listOfTodos.insertAdjacentHTML('beforeend', `<li>${userId} ${id} ${title} ${completed} </li>`);
        
    })
   
})

