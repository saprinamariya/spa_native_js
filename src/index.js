import _ from 'lodash';

import { render } from './files_js/render';
import { renderPostsList } from './files_js/renderPostsList';
import { closeModal } from './files_js/closeModal';

import modalTemplate from './templates/modal.html';
import postsListTemplate from './templates/postsList.html'
import inputTemplate from './templates/input.html'


const fetchPostsResult = fetch('https://jsonplaceholder.typicode.com/posts');

let posts;
let post;

fetchPostsResult.then(response => response.json()).then(data => {

    posts = data;
    const inputTempate = _.template(inputTemplate)({});
    render(inputTempate);

    const postsList = _.template(postsListTemplate)({
        posts
    });
    renderPostsList(postsList);
  
    const input = document.getElementById('inputPosts');
    input.addEventListener('input', filterPosts);

    function filterPosts(e) {

        const somePosts = posts.filter(post => post.title.includes(e.target.value));
        const postsSelector = document.querySelector(".posts-list");
        postsSelector.remove();

        const somePostsList = _.template(postsListTemplate)({
            posts: somePosts
        });
        renderPostsList(somePostsList);
    }

    document.querySelectorAll(".post").forEach(item => {
        item.addEventListener("click", (event) => {
            const postId = +event.target.dataset.id;
            post = posts.find(post => postId === post.id);

            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(response => response.json())
            .then(comments => {
                const modalMarkup = _.template(modalTemplate)({
                    post, comments
                });
                render(modalMarkup);
                
                const modal = document.querySelector(".modal");
                const overlay = document.querySelector(".overlay");

                modal.style.display = "block";
                overlay.style.display = "block";

                const closeBtn = document.querySelector(".close");
                closeBtn.addEventListener("click", () => {
                    closeModal();
                });

                overlay.addEventListener("click", () => {
                    if (modal) {
                        closeModal();
                    }
                })
            })
            .catch(error => {
                alert(`Что-то пошло не так. ${error}`);
            })
        })
    });
});