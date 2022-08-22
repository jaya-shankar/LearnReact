
import React from "react";
import './App.css';

import { Grommet } from "grommet";
import { hpe as theme } from 'grommet-theme-hpe'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Content from "./Content";
import Load from './Components/Load';

function App() {

  // create a state to store graph data
  const initialData = [{ date: '01', amount: 2 }, 
    { date: '02', amount: 47 }, 
    { date: '03', amount: 33 }, 
    { date: '04', amount: 0 }, 
    { date: '05', amount: 27 }, 
    { date: '06', amount: 44 }, 
    { date: '07', amount: 20 }
  ];
  const [graphData, setGraphData] = React.useState(initialData);
  // create function to update graph data for a particular month
  function UpdateGraphData(planted_trees) {
  // update graph data
  let month = new Date().getMonth().toString()-3;
  console.log(typeof(graphData))
  console.log(graphData)
  setGraphData(graphData.map(element => (parseInt(element.date) === month) 
    ? { ...element, amount: element.amount + parseInt(planted_trees) } 
    : { ...element }));
  }


  return (
      <Grommet full theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/load"  element={<Load/>}/>
            <Route path="/" element={<Content graphData = {graphData} UpdateGraphData ={UpdateGraphData}  />} />
            
          </Routes>
        </BrowserRouter>
      </Grommet>
  );
}

export default App;
