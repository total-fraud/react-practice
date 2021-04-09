import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <SideBar />
      <Profile />
    </div>
  );
}

export default App;