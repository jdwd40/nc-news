import axios from 'axios';

const newsApi = axios.create({
//  baseURL: 'https://nc-news-ex1.herokuapp.com/api/',
 baseURL: 'http://localhost:9090/api',
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

export const postCommentByArticleId = (article_id, comment) => {
  const postComment = {};
  postComment.body = comment;
  postComment.username = 'grumpy19';
  return newsApi
    .post(`/articles/${article_id}/comments`, postComment)
    .then(({ data }) => {
      console.log(data);
      return data;
    });
};

export const sendVoteToArticle = (article_id) => {
  const vote = {};
  vote.inc_votes = 1;
  return newsApi.patch(`/articles/${article_id}`, vote).then(({ data }) => {
    console.log('inside sendVotes :', data);
    return data;
  });
};

export const checkUserExists = (userName) => {
  return newsApi
    .get(`/users/${userName}`)
    .then(({ data }) => {
      return data.user.username;
    })
    .catch((err) => {
      console.log(err.response.status);
      if (err.response.status === 404) {
        return Promise.resolve('User not found');
      }
    });
};
