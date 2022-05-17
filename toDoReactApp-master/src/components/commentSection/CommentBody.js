import React from 'react';

function CommentBody(props){
  console.log(props);
  return(
    <div>
      <h3> Name: {props.name}</h3>
      <p> Comment: {props.text}</p>
    
      <br />
    </div>
  );
}

export default CommentBody;
