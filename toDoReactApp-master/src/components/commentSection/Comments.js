import React,{Component} from 'react';
import CommentBody from './CommentBody';

class Comments extends Component{
  render(){
    return(
      <div className='commentSection'>
        <CommentBody
        comment= {{
          name: 'abc',
          text: 'nice app looking ahead!',
          phone: '123'
        }}
        />
        <CommentBody
        comment= {{
          name: 'gfg',
          text: 'OP!',
          phone: '12345678'
        }}
        />
        <CommentBody
        comment= {{
          name: 'xyZ',
          text: 'Great App',
          phone: '098765'
        }}
        />
        <CommentBody name='xyZ' text = 'Great App' />

      </div>
    );
  }
}

export default Comments;
