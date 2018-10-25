import React, { Component } from 'react';

class TabNav extends Component {
    render() {
        return (
            <div className='tabnav'>
                <div className='tabnav__tabs'>
                    {
                        this.props.tabs.map((tab, index) => {
                            const className = `tabnav__tab ${tab.active ? 'tabnav__active' : ''}`
                            return <a key={index} onClick={() => this.props.handleClick(tab.title)} className={className}>{tab.title}</a>
                        })
                    }
                </div>

                {
                    this.props.tabs.map((tab, index) => {
                        if (tab.active) {
                            return (
                                <div key={index} className='tabnav__component'>
                                    {tab.component}
                                </div>
                            )
                        }
                    })
                }

            </div>
        )
    }
}

export default TabNav;