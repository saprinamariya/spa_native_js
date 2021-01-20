export const templateModal = (postMarkup, commentsMarkup) => 
    `<div class="overlay"></div>
    <div class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close">close</button>
            </div>
            <div class="modal-body">
                ${postMarkup}
                ${commentsMarkup}
            </div>
        </div>
    </div>`
;