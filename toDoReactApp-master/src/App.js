import React,{Component} from 'react';
import Header from './components/basic/Header';
import MainBody from './components/basic/MainBody';
import Footer from './components/basic/Footer';
import ToDoMain from './components/ToDoMain';
// import Comments from './components/Comments';
// import CommentMap from './components/CommentMap';


class App extends Component {
  render(){
    return(
      <div>
        <Header />
        <MainBody />
        <ToDoMain />
        <Footer />
      </div>
    );
  }
}

export default App;
