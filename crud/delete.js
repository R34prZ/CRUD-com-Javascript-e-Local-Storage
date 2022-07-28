import { database } from "./database.js";

export const deletePost = (id) => {
    // apaga no banco de dados
    const updatedDatabase = database.posts.filter(post => post.id != id);
    database.posts = updatedDatabase;

    // apaga no HTML
    document.querySelector(`[data-id="${id}"`).remove();
}