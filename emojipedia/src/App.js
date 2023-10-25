import './App.css';
import './components/styles.css';
import './components/Navbar.css';
import EmojiLibrary from './components/EmojiLibrary';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <EmojiLibrary/>
    </div>
  );
}

export default App;
