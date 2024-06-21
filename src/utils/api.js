import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-fgw1.onrender.com/api",
});

export const getArticles = () => {
  return ncNewsApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getTopics = () => {
  return ncNewsApi.get("/api/topics").then(({ data }) => {
    return data.topics;
  });
};
export const getArticlesByTopic = (topics) => {
  return ncNewsApi
    .get("/articles", { params: { topics: topics } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticlesById = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchArticleById = (article_id, newVotes) => {
  return ncNewsApi
    .patch(`/articles/${article_id}`, newVotes)
    .then(({ data }) => {
      return data.article;
    });
};
export const postComment = (body, article_id, username) => {
  const postBody = {
    body: body,
    username: "grumpy19",
  };
  return ncNewsApi
    .post(`/articles/${article_id}/comments`, postBody)
    .then(({ data }) => {
      return data.comment;
    });
};
export const deleteComment = (comment_id) => {
  return ncNewsApi.delete(`/comments/${comment_id}`);
};
