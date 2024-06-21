import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Home } from "./components/Home";
import { SingleArticle } from "./components/SingleArticle";
import { UserProvider } from "../context/user";
import { ArticlesByTopic } from "./components/ArticlesByTopic";

function App() {
  return (
    <UserProvider>
      <main className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/topics/:topic" element={<ArticlesByTopic />} />
        </Routes>
      </main>
    </UserProvider>
  );
}
export default App;
