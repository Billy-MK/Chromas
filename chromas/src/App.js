import './App.css';
import Logo from './components/logo';
import Nav from './components/Nav/Nav';
import Template from './components/Template/Template';

function start() {
  document.getElementById('logo-container').style.marginTop = '-10%'
  document.getElementById('logo').style.opacity = '0%'
  document.getElementById('start-button').style.marginTop = '-0%'
  document.getElementById('start-button').style.opacity = '0%'
  document.getElementById('nav-container').style.left = '0%'
}

function App() {
  return (
    <div>
      <Template />
      <Logo />
      <div id='button-container'>
        <button className="button is-medium is-rounded" id='start-button' onClick={start}>Get Started</button>
      </div>
      <Nav />
    </div>
  );
}

export default App;
