import React from 'react';
import './App.css';
import { Divider, MantineProvider } from '@mantine/core';
import Emailcomponent from './components/emailcomponent';
import Passwordcomponent from './components/passwordcomponent';
import Disablecomponent from './components/disablecomponent';


function App() {
  return (
    <div className="App">
     <MantineProvider theme={{fontFamily:"Sofia Pro"}}withGlobalStyles withNormalizeCSS>
  
        <Emailcomponent/>
        <Divider  style={{width:"95%"}} mx="lg"/>
        <Passwordcomponent/>
        <Divider mx="lg" style={{width:"95%"}}/>
        <Disablecomponent/>
     
      </MantineProvider>
    </div>
  );
}

export default App;
