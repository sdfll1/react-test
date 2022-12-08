import './App.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Manage from './components/manage/Manage';
import Team from './components/team/Team';
import GetStart from './components/getStart/GetStart';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Manage />
      <Team />
      <GetStart />
      <Footer />
    </div>
  );
}

export default App;
