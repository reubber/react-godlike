import React, { Component } from 'react'
import Square from './square'
import LikeButton from './like-button'
import SearchButton from './search-button'

class App extends Component {
    constructor(){
        super()
        this.state = {
            text: 'reubber'
        }
    }

    render() {
        return (
            <div className="container">
                
                <LikeButton />
                <SearchButton />
            </div>

        )
    }
}

export default App