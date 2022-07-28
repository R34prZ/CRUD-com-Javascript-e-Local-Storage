import { database } from "./database.js";

export const createPost = (content, htmlOnly = false) => {
    if (content != "") {
        let id = database.posts.length;
        if (!htmlOnly) {
            id += 1;
            // criando no banco de dados
            database.posts.push({ id: id, content: content });
        }
        // criando na página
        const postList = document.querySelector(".posts-list");

        // cria o item da lista de posts
        const post = document.createElement("li");
        post.dataset.id = id;
        post.classList.add("post-item");

        // cria o texto que vai ser inserido no item da lista
        const postText = document.createElement("p");
        postText.innerText = content;
        postText.contentEditable = true;
        postText.classList.add("post-item__content")

        // cria o botão de deletar
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Deletar";
        deleteBtn.classList.add("del-btn");

        post.appendChild(postText);
        post.appendChild(deleteBtn);

        // postList.insertAdjacentElement("beforebegin", post);
        postList.appendChild(post);
    }
}