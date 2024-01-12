

import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { darkTheme } from './theme/DarkTheme';
import HomePage from './customer/pages/homepage/HomePage';
import Routers from './routers/Routers';
//import Routers from './customer/Routers/Routers';


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
        <Routers/>
    </ThemeProvider>
      
    
  );
}

export default App;