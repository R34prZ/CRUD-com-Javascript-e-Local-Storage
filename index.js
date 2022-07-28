import { database } from "./crud/database.js";
import { createPost } from "./crud/create.js";
import { readPosts } from "./crud/read.js";
import { deletePost } from "./crud/delete.js";
import { updatePost } from "./crud/update.js";

const postForm = document.querySelector(".notes-form");
const postInput = document.querySelector("input[name='send-input']");
const postList = document.querySelector(".posts");

const saveData = () => {localStorage.setItem("posts", JSON.stringify(database.posts));}

// CREATE
postForm.addEventListener("submit", (event) => {
    event.preventDefault();
    createPost(postInput.value);
    postInput.value = "";
    saveData();
    console.log(database);
});

// READ
document.onload = readPosts();
saveData();

// UPDATE
postList.addEventListener("input", (event) => {
    const target = event.target;
    updatePost(target.parentNode.dataset.id, target.innerText);
    saveData();
})

// DELETE
postList.addEventListener("click", (event) => {
    if (event.target.classList.contains("del-btn")) {
        deletePost(event.target.parentNode.dataset.id);
        saveData();
        console.log(database.posts);
    }
});