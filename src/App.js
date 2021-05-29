import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import News from './components/news/News';
import './sass/App.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidebar />
        <News />
      </div>
    </div>
  );
}

export default App;
