import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider";
import Navbar from "./components/Navbar";
import { Favoritos } from "./views/Favoritos";
import Home from "./views/Home";

import 'bootstrap/dist/css/bootstrap.min.css';

const PHOTO_URL = "/photos.json";

const App = () => {
  return (
    <ContextProvider>
     <div>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/favoritos"
            element={<Favoritos />}
          />
        </Routes>
      </div>
    </ContextProvider>
  );
};
export default App;
