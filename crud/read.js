import { createPost } from "./create.js";
import { database } from "./database.js";

export const readPosts = () => {
    database.posts = JSON.parse(localStorage.getItem("posts")) || database.posts;

    database.posts.forEach( post => {
        createPost(post.content, true);
    });
}