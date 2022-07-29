import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import SigninPage from "./pages/SigninPage";
import { BrowserRouter , Routes , Route, Link } from 'react-router-dom'
import FavouritesPage from "./pages/FavouritesPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter>
        <Routes>
            <Route path='/favourite' element={<FavouritesPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signin' element={<SigninPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>
    </BrowserRouter>
    {/* <LoginPage /> */}
    {/* <SigninPage /> */}
    </>
  );
}

export default App;
