export const templateCommentsList = (dataComments) => dataComments.map(comment => 
    `<div class="comment">
        <p class="comment__name">Name: ${comment.name}</p>
        <p class="comment__email">Email: ${comment.email}</p>
    </div>`
).join("");