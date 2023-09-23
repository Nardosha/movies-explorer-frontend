import "./App.css";
import { Header } from "../Header/Header";
import { Route, Routes } from "react-router-dom";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { useRef } from "react";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import {Profile} from "../Profile/Profile";

function App() {
  const isLogged = useRef(true);

  return (
    <div className="app">
      <Header isLogged={isLogged} />
      <Routes>
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
