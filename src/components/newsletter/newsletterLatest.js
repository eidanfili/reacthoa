import React, { Component } from 'react';

    

function Button({callback, text, icon, className}) {
    if(icon) {
        return (
            <a onClick={callback} className={`${className} button`}>
                <i className={icon}></i>
            </a>
        )
    }
    
}

class NewsletterLatest extends Component {

    handleEdit = () => {
        console.log('yeet');
    }
    
    render() {
        const { title, body, imageURL } = this.props;
        return(
            <div className="newsletter-latest">
                <h2 className="newsletter-latest__title">{title}</h2>
                <img className="newsletter-latest__image" src={imageURL}/>
                <Button className="newsletter-latest__button" callback={() => this.handleEdit()} icon="fas fa-pen"/>
                <div className="newsletter-latest__body">
                    <p>{body}</p>
                </div>
            </div>
        )
    }
}



export default NewsletterLatest;