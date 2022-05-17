import React from 'react';
import CommentBody from './CommentBody';
import commentData from './data.js';

function CommentMap(){
  const CommentComponent = commentData.map( com => <CommentBody key={com.id}
                           name={com.name} text={com.text}/> );

  return(
    <div>
      {CommentComponent}
    </div>
  );

}

export default CommentMap;
