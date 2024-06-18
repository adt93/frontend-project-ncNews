import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Home } from "./components/Home";
import { Articles } from "./components/ArticleList";
import { SingleArticle } from "./components/SingleArticle";

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </main>
  );
}
export default App;
