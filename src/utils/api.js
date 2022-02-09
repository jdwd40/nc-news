import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://nc-news-ex1.herokuapp.com/api/',
});

export const getTopics = () => {
  return newsApi.get('/topics').then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = () => {
  return newsApi.get('/articles').then(({ data }) => {
    let { articles } = data;
    //console.log('from get arts: ', articles);

    return articles;
  });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    let { article } = data;
    return article;
  });
};

export const getArticlesByTopic = (topic) => {
  return newsApi.get(`/articles/?topic=${topic}`).then(({ data }) => {
    const { articles } = data;
    console.log(' from getArticle >>>> ', articles);
    return articles;
  });
};

export const getCommentsById = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    const { comments } = data;
    console.log(' from comments >>>> ', comments);
    return comments;
  });
};
