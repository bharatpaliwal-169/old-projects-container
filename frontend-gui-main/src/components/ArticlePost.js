import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
const ArticlePost = (props) =>{
  const {id,title,content} = props;

  return(
    <>
      <article className='card  mt-4 mb-4' key={id}>
        <div className='card-header bg-secondary text-white custom-head' >
          <Link to={`/articles/${id}`} className="custom-head">
            {title}
          </Link>
        </div>
        <div className='card-body'>
          {content}
        </div>
      </article>
    </>
  )
}

export default ArticlePost;