document.getElementById("button").addEventListener("click", getDate);

function getDate(){
    let request = new XMLHttpRequest();

    request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

    request.onprogress = function() {
        document.getElementById("user").innerHTML = "Loading...";
    }


    request.onload = function() {
        console.log(request.responseText);
        // let users = JSON.parse(request.responseText);
        // document.getElementById("user").innerHTML = users[1].login;
    }

    request.send();
}