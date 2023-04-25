import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import DataProvider from "./contexts/ContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsView from "./components/details/DetailsView";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/FlipkartClient" element={<Home />} />
            <Route path="/product/:id" element={<DetailsView />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
