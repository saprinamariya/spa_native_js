import { templatePostsList } from './templatePostsList';
import { render } from './render';
 
export const renderPosts = (data) => {
    const markup = templatePostsList(data);
    render(markup)
};

