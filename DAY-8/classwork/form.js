// // let username=document.getElementById("username").value;
// // let email=document.getElementById("email").value;
// // let password=document.getElementById("password").value;
// // let confirmpassword=document.getElementById("password").value;


let form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log("RBIENT")

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    console.log(username);
    if (password !== confirmpassword) {
        return alert("password do not match")
    }
    let obj = {
        username, email, password, confirmpassword
    }
    let userdata = document.getElementById("userdata");
    userdata.style.width = "30px"
    userdata.style.margin = "auto"
    userdata.style.padding = "10px"
    userdata.style.textAlign = "center"
    userdata.style.marginTop = "10px"
    let h2 = document.createElement("h2");
    h2.innerText = obj.username;
    let p1 = document.createElement("p");
    p1.innerText = obj.email;
    let p2 = document.createElement("p");
    p2.innerText = obj.password;
    let p3 = document.createElement("p");
    p3.innerText = obj.confirmpassword;
    userdata.append(h2, p1, p2, p3)
    console.log(obj)
})




// // console.log(username)