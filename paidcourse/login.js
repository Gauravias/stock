const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "index.html"
    }else{
        alert("Something went wrong")
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "gaurav" && password === "gauravtripathi"){
        return true
    }else{
        return false
    }
}