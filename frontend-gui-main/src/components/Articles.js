import React from 'react';
import data from '../data';
import ArticlePost from './ArticlePost';
const Articles = () =>{
  return(
    <React.Fragment>
        <div className='row'>
          <section className='col-12 col-sm-8 '>
            {data.map((item) => {
              return <ArticlePost {...item} /> 
            })}
          </section>
        </div>
    </React.Fragment>
  )
}

export default Articles;