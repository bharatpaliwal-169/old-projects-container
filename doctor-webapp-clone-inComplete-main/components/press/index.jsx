import React from 'react';
import {data} from './data';
export default function Press() {
    return (
        <React.Fragment>
            <section className="contact_banner">
            <div className="container">
                <div className="contact_inner text-center">
                    <h2 className="main_heading">Press Release</h2>
                    <p className="sub_heading">Media and Public Interaction</p>
                    </div>
                </div>
            </section>

            <section className="news_articles">
                <div className="container">
                    <div className="row">
                        {data.map((item)=>{
                            return(
                            <div className='col-md-4'>
                                <div className='press_box'>
                                <div className="press_top">
                                    <img src={item.img} alt="news"/>
                                </div>
                                <h3>{item.title}</h3>
                                <a href={item.url}>Read full article</a>
                                <p> {item.date}</p>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}
