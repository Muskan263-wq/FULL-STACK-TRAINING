const form = document.getElementById("form");

form.addEventListener("submit",async(event)=>{
    event.preventDefault();
    const title=document.getElementById("title").value;
    const brand=document.getElementById("brand").value;
    const image=document.getElementById("image").value;
    const desc=document.getElementById("desc").value;
    const catagory=document.getElementById("catagory").value;
    const price=document.getElementById("price").value;
    const rating=document.getElementById("rating").value;


    const data={
        title,image,brand,catagory,rating,price,desc
    };
    const token=localStorage.getItem("token");

    const response= await fetch("http://localhost:8080/api/products/create-products",{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "Authorization":token
    },
    body:JSON.stringify(data)
   
});
// console.log(response);
const res= await response.json();
console.log(res);
});

const getData=async()=>{
    const token=localStorage.getItem("token");

    const response=await fetch("http://localhost:8080/api/products/get-products",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":token
        }
    });


    const res=await response.json();
    console.log(res)
  getData();
}
