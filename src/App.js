import './App.css';
import PersonContainer from './components/person/PersonContainer';
import ListContainer from './components/list/ListContainer';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';


function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={DateAdapter}><PersonContainer />
      <ListContainer /></LocalizationProvider>
      
    </div>
  );
}

export default App;
