import './App.css';
import { Grommet } from "grommet";
import { hpe as theme } from 'grommet-theme-hpe'

import Content from "./Content";

function App() {

  return (
      <Grommet full theme={theme}>
        <Content/>
      </Grommet>
  );
}

export default App;
