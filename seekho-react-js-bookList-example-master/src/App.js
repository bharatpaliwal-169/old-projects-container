import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import BookList from './components/BookList';

function App() {
  return (
    <div className='container-fluid'>
      <Header/>
      <BookList/>
      <Footer/>
    </div>
  );
}

export default App;