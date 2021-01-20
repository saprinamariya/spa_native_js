export const render = (markup) => {
    const root = document.getElementById('root');
    const div = document.createElement('div');
    div.innerHTML = markup;

    root.append(div); 
};