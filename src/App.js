import { Provider } from 'react-redux';
import './App.css';
import Body from './componets/Body';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
    <Body/>

    </Provider>
  );
}

export default App;
