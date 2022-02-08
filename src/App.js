import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import ArticleCard from './components/ArticleCard';
import Articles from './components/Articles';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Articles />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/articles/:article_id" element={<ArticleCard />}></Route>
          <Route path="/articles/*" element={<Articles />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
