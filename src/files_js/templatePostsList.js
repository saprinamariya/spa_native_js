import { templatePost } from './templatePost';

export const templatePostsList = (data) => data.map(templatePost).join("");