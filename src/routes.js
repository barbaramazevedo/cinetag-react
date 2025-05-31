import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Container from "./components/Container";
import FavoritesProvider from "./contexts/favorites";
import Player from "./pages/Player";
import NotFound from "./pages/NotFound";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Header />
            <Container>
                <FavoritesProvider>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/favorites" element={<Favorite />}></Route>
                        <Route path="/:id" element={<Player />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                </FavoritesProvider>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;