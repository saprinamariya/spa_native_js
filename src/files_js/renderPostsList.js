export const renderPostsList = (markup) => {
    const root = document.getElementById('root');
    const div = document.createElement('div');
    div.classList.add('posts-list');
    div.innerHTML = markup;

    root.append(div); 
};