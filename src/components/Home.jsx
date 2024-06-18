import { getArticles } from "../utils/api";
import { useState } from "react";
import { Articles } from "./ArticleList";

export const Home = () => {
  return (
    <main>
      <Articles />
    </main>
  );
};
