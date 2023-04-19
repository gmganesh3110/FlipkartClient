import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import DataProvider from "./contexts/dataProvider";

function App() {
  return (
    <DataProvider>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
