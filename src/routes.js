import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Container from "./components/Container";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/favorites" element={<Favorite />}></Route>
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;