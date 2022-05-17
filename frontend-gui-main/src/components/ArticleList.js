import React, { Component } from 'react';
import axios from 'axios';
// import {Link} from 'react-router-dom';
import ArticlePost from './ArticlePost';
import ArticleForm from './ArticleForm';
import NavBarReact from './NavBarReact';

class ArticleList extends Component {
  state = {
    articles: [],
  }
  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/")
        .then(response => {
          this.setState({ 
            articles: response.data
          })
          // console.log(response.data);
        })
  }
  
  render() {
    return (
      <React.Fragment>
        <NavBarReact />
        <div className='container-fluid'>
          <section className='col-12 col-sm-7 offset-sm-2'>
            {/* <Link to={"/create"} className="btn btn-lg btn-primary">
              Add Post
              </Link> */}
            {/* {data.map((item) => {
              return <ArticlePost {...item} /> 
            })} */}

          {this.state.articles.map((article) => {
            return <ArticlePost {...article} key={article.id} />
          })}

          </section>
        
          <section className='col-12 mt-2 form-border'>
            <h1 className='offset-sm-4'>Create your Article</h1>
            <ArticleForm requestType='post' articleID={null} btnText = 'Create Article' />
          </section>
        </div>
    </React.Fragment>
    );
  }
}

export default ArticleList;
