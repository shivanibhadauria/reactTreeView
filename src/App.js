import logo from './logo.svg';
import './App.css';
import Menus  from './components/Menus'
import Treeview from './components/Treeview';
import './components/Treeview.css'

function App() {
  return (
    <body>
  < Treeview menus={Menus}/>
  </body>);
}

export default App;
