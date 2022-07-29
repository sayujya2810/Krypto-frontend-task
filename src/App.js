import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import SigninPage from "./pages/SigninPage";
import { BrowserRouter , Routes , Route, Navigate} from 'react-router-dom'
import FavouritesPage from "./pages/FavouritesPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductGrid from "./pages/ProductGrid";
import { useEffect, useState } from "react";

function App() {

  // const [loginFlag, setLoginFlag] = useState(false);
  return (
    <>
    <BrowserRouter>
        <Routes>
            {/* <Route path='/favourite' element={<FavouritesPage />} /> */}
            <Route path='/login' element={<LoginPage />} />
            <Route index path='/' element={<SigninPage />} />
            {/* <Route path='/checkout' element={<CheckoutPage />} /> */}
            {/* <Route path='/allproducts' element={<ProductGrid />} /> */}
        </Routes>
    </BrowserRouter>
    {/* {
      localStorage.getItem("log_status") ? <Navigate to="/allproducts" /> && <ProductGrid /> : console.log("null")
    } */}

    {/* <SigninPage /> */}

    </>
  );
}

export default App;
