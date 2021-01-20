export const templatePost = (post) => 
    `<div class="post" data-id=${post.id}>
        <h4 class="post__title">${post.title}</h4>
        <p class="post__body">${post.body}</p>
    </div>`
;