function getData(){
    let userId = document.getElementById("userId").Value
    let title = document.getElementById("title").value
    let body = document.getElementById("body").value

    let user = {
        userId : userId,
        title : title,
        body : body

    }

    return user

}


function sendData(){
    // create object of xmlHttpRequest
    // obj.open(http,url)
    // obj.setRequestHeader("content-type","application/json")
    // obj.send (data)
    // obj.onload,obj.onerror

let userData = getData()
let xmlRequest = new XMLHttpRequest()
xmlRequest.open("post","https://jsonplaceholder.typicode.com/posts")
xmlRequest.setRequestHeader("content-type","application/json")
xmlRequest.send(JSON.stringify(userData))
xmlRequest.onload = function(){
    if (xmlRequest.status==201){
        console.log(xmlRequest.response)
    }else{
        console.log("Response status code"+xmlRequest.status)
    }
}
xmlRequest.onerror = function(){
    console.log("network error")
}

}

