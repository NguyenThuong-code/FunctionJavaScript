let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts")
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});
let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};
let formValidation =() =>{
    if(input.value ===""){
        msg.innerHTML="Post cannot be blank";
        console.log("failure!");
    }else{
        console.log("success!");
        msg.innerHTML = "";
        acceptData();
    }
};
let createPost = () => {
    posts.innerHTML += `
    <tr>
      <td>${data.text}</td>
      <td class="options">
      <input onClick="editPost(this)" class="btn btn-primary" type="button" value="Edit">        
      </td>
      <td class="options">
      <input  onClick="deletePost(this)" class="btn btn-primary" type="button" value="Delete">        
      </td>
    </tr>
    `;
    input.value = "";
  };
 let deletePost = (e) =>{
  var answer = window.confirm("Delete data?");
if (answer) {
  e.parentElement.parentElement.remove();
}
else {
    return;
}
  
 };
 let editPost = (e) =>{
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
 }