import { getArticles } from "../utils/api";
import { useState } from "react";
import { Articles } from "./ArticleList";

export const Home = () => {
  return (
    <main>
      <h1>Welcome to nc News!</h1>
      <Articles />
    </main>
  );
};
