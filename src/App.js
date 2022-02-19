import PageLayout from './components/pageLayout/PageLayout';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PageLayout />
      </div>  
    </Provider>
  );
}

export default App;
