 import './App.css';
import Header from './Header';

function App() {
  const handleName= function() {
    const names=['Ivan','Pesho','Gosho']
    const randonName=Math.floor(Math.random()*names.length);
    return names[randonName];
  }

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
