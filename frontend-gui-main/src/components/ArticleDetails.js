import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import ArticleForm from './ArticleForm';
import {Button} from 'reactstrap';
class ArticleDetails extends Component {

  state ={
    article: {}
  }

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleID}`)
        .then(response => {
          this.setState({ 
            article: response.data
          })
          // console.log(response.data);
        })
  }

  handleDelete = () => {
    const articleID = this.props.match.params.articleID;
    axios.delete(`http://127.0.0.1:8000/api/${articleID}/delete`)
    return <Redirect to='/'  />
        
  }


  render() {
    return (
      <React.Fragment>
        <div key={this.state.article.id} className='card  mb-5'>
          <p className='card-header display-4 '>{this.state.article.title}</p>
          <p className='card-body'>{this.state.article.content}</p>
        </div>
        
        <div className='col-12 col-sm-7 form-border offset-sm-2'>
          <p className='display-4 offset-sm-3'> Update article </p>
            <ArticleForm requestType='put' articleID={this.state.article.id} btnText='Update Article'/>
          <form onSubmit={this.handleDelete}>
            <Button color='danger'  htmlType='submit' className='mt-5 ms-3 mb-4 btn-block' >Delete Article</Button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default ArticleDetails;