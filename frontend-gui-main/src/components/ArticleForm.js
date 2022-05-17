/* eslint-disable default-case */
import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class ArticleForm extends Component {

  handleFormSubmit = (event,requestType,articleID) => {

    // event.preventDefault();
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;
    console.log("Hi , dev");
    console.log(title,content);

    switch (requestType) {
      case 'post':
        return axios({
          method: 'POST',
          url: 'http://127.0.0.1:8000/api/create/',
          data: {
              title: title,
              content: content,
          }
      }).then(function (response) {
          console.log(response);
      }).catch(function (error) {
          console.log(error);
      });
        
      case 'put':
        return axios.put(`http://127.0.0.1:8000/api/${articleID}/update/`,{
          title: title,
          content: content
        })
        .then(response => {console.log(response);})
        .catch(error => {console.error(error);});
    }
  }

  render() {
    return (
          <div className="col-10 offset-sm-1 mb-5">
            <Form onSubmit={event => this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.articleID
            )}>
              <FormGroup>
                <Label for="article-title"> Title </Label>
                <Input type="text" name="title"  placeholder="Article Title" />
              </FormGroup>
              
              <FormGroup>
                <Label for="article-content">Content</Label>
                <Input type="textarea"  name="content" placeholder="Your thoughts here....."/>
              </FormGroup>

              <Button htmlType="submit">
                {this.props.btnText}
              </Button>
            </Form>
          </div>
      
    );
  }
}

export default ArticleForm;