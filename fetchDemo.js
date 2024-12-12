const getJSON = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    const data = response.json();
    return data;
}
getJSON().then( (data)=>{
    
    //var randomString = JSON.parse(data);

    console.log(data)
})

