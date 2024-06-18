import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Home } from "./components/Home";
import { Articles } from "./components/ArticleList";

function App() {
  return (
    <main className="App">
      <Header />
      <Articles />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}
export default App;
