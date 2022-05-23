import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import ArticleCard from './components/ArticleCard';
import ArticleList from './components/ArticleList';
import AddCommentForm from './components/AddCommentForm';
import SignInPage from './components/SignInPage';
import SignIn from './components/SignIn';
import DisplayArticle from './components/DisplayArticle';
import { UserContext } from './contexts/User';
import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [loggedInUser, setLoggedInUser] = useState('test user');
  return (
    <ChakraProvider>
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<ArticleList />}></Route>
            <Route path="/articles" element={<ArticleList />}></Route>
            <Route
              path="/articles/:article_id"
              element={<DisplayArticle />}
            ></Route>
            <Route path="/articles/*" element={<ArticleList />}></Route>
            <Route
              path="/comment/:article_id"
              element={<AddCommentForm />}
            ></Route>
            <Route path="/sign_in" element={<SignIn />}></Route>
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
