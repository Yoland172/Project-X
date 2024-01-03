import SearchContainer from '../Search/SearchContainer';
import MainHeader from '../mainHeader/mainHeader'; 
import styles from './App.module.scss';


function App() {
  return (
    <div className="App">
      <div className={styles.test}></div>
      <MainHeader/>
      <SearchContainer/>
    </div>
  );
}

export default App;
