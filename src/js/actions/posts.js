export const loadPosts = () => {
    return { type: null };
};
export const insertPost = (post) => {
    return { type: 'INSERT_POST', payload: post };
};