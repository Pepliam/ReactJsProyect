import './App.css';
import NavBar from './components/NavBar'

function App() {
  const styles = {
    color: `red`,
    backgroundColor: "white"
  }
  return (
      <>
        <NavBar/>
        <div className="container" style={styles}>
          
        </div>

      </>
  );
}



export default App;
