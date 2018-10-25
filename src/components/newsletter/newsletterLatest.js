import React, { Component } from 'react';

class NewsletterLatest extends Component {
    render() {
        const { title, body, imageURL } = this.props;
        return(
            <div className="newsletter-latest">
                <h2 className="newsletter-latest__title">{title}</h2>
                <img className="newsletter-latest__image" src={imageURL}/>
                <div className="newsletter-latest__body">
                    <p>{body}</p>
                </div>
            </div>
        )
    }
}



export default NewsletterLatest;