import "./App.css";
import { Header } from "../Header/Header";
import { Route, Routes } from "react-router-dom";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { Profile } from "../Profile/Profile";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="signin" element={Login} />
        <Route path="signup" element={Register} />
        <Route path="/*" element={NotFoundPage} />
      </Routes>
         {/*<Route path="me" element={Profile} />*/}
    </div>
  );
}

export default App;
