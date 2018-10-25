import React, { Component } from 'react';

import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';

class NewsletterGrid extends Component {
    render() {

        const latest = {
            id: '115',
            title: 'title',
            body: "lorem ipsum dolor sit amet Okay, so that looks really good. Now let's go ahead and end the video because it's getting really long and let's continue styling these grids in the next video.So lets get into the terminal and commit our code",
            date: new Date(),
            imageURL: 'https//:via.placeholder.com/960x258'
        }


        return (
            <div className='newsletter-grid'>
                {/* add button */}
                <NewsletterBox date={new Date()} />
                <NewsletterArchive />
                <NewsletterLatest {...latest}/>
            </div>
        )
    }
}

export default NewsletterGrid;