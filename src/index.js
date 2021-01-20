import { scss } from './styles/main.scss';
import { templateCommentsList } from './files_js/templateCommentsList';
import { templateModal } from './files_js/templateModal';
import { templatePost } from './files_js/templatePost';
import { render } from './files_js/render';
import { renderPosts } from './files_js/renderPosts';
import { closeModal } from './files_js/closeModal';



const fetchPostsResult = fetch('https://jsonplaceholder.typicode.com/posts');

let posts;


// const renderPosts = (data) => {
//     const markup = templatePostsList(data);
//     render(markup)
// };

fetchPostsResult.then(response => response.json()).then(data => {
    renderPosts(data);
    posts = data;

    document.querySelectorAll(".post").forEach(item => {
        item.addEventListener("click", (event) => {
            const postId = +event.target.dataset.id;
            const post = posts.find(post => postId === post.id);

            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(response => response.json())
            .then(dataComments => {
                const modalMarkup = templateModal(templatePost(post),
                templateCommentsList(dataComments));
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
                alert(`Что-то пошло не так ${error}`);
            })
        })
    });
});


// const closeModal = () => {
//     const modal = document.querySelector(".modal");
//     const overlay = document.querySelector(".overlay");

//     modal.remove();
//     overlay.remove();
// };

// const templatePost = (post) => 
//     `<div class="post" data-id=${post.id}>
//         <h4 class="post__title">${post.title}</h4>
//         <p class="post__body">${post.body}</p>
//     </div>`
// ;

// const templatePostsList = (data) => data.map(templatePost).join("");


// const render = (markup) => {
//     const root = document.getElementById('root');
//     const div = document.createElement('div');
//     div.innerHTML = markup;

//     root.append(div); 
// };

// const templateCommentsList = (dataComments) => dataComments.map(comment => 
//     `<div class="comment">
//         <p class="comment__name">Name: ${comment.name}</p>
//         <p class="comment__email">Email: ${comment.email}</p>
//     </div>`
// ).join("");


// const templateModal = (postMarkup, commentsMarkup) => 
//     `<div class="overlay"></div>
//     <div class="modal">
//         <div class="modal-content">
//             <div class="modal-header">
//                 <button class="close">close</button>
//             </div>
//             <div class="modal-body">
//                 ${postMarkup}
//                 ${commentsMarkup}
//             </div>
//         </div>
//     </div>`
// ;

