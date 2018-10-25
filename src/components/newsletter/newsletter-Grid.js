import React, { Component } from 'react';

import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';
import Button from '../button';
import history from '../../history';

class NewsletterGrid extends Component {
    
    handleAddNewsletter = () => {
       history.push('/newsletter/new')
    }
    
    render() {

        const latest = {
            id: '115',
            title: 'title',
            body: "lorem ipsum dolor sit amet Okay, so that looks really good. Now let's go ahead and end the video because it's getting really long and let's continue styling these grids in the next video.So lets get into the terminal and commit our code",
            date: new Date(),
            imageURL: 'http://via.placeholder.com/960x258'
        }


        return (
            <div className='newsletter-grid'>
                <Button className='newsletter-grid__button' icon='fas fa-plus' callback={() => this.handleAddNewsletter()} />
                <NewsletterBox date={new Date()} />
                <NewsletterArchive />
                <NewsletterLatest {...latest}/>
            </div>
        )
    }
}

export default NewsletterGrid;