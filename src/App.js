import './App.css';
import Nav from './nav/nav.js'
import Popout from './popout/popout.js';

function MyButton() {
  return (
      <button>I'm a button</button>
  );
}

function App() {
  return (
    <div class="bg-warm min-h-screen flex justify-center">
      <Nav />
      <Popout />
    </div>
  );
}

export default App;