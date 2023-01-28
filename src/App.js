import { Grid } from "@mui/material";
import "./App.css";
import StaticComponent from "./components/staticleftpanel";
function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid lg={6} md={6}>
          <StaticComponent />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
