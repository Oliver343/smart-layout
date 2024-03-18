import './App.css';
import ContextProvider from './store/ContextProvider';
import MainContainer from './pages/MainContainer';

function App() {

  return (
    <ContextProvider >
      <MainContainer />
    </ContextProvider>
  );
}

export default App;
