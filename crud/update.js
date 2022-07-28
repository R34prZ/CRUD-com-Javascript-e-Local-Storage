import { database } from "./database.js";

export const updatePost = (id, content) => {
    // da update na database
    const post = database.posts.find(post => post.id == id);
    post.content = content;
    console.log(post);

    // update no HTML
    // document.querySelector(`data-id="${id}"`).innerText = content;
}