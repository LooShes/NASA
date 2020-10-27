import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home'
import Search from './Search'
import Favourites from './Favourites'
import MediaCard from './MediaCard'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Container() {
    let [loadPic, setLoadPic] = useState("")

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=f2hzJ5bijp1tdhKahv1k5r0K7GrY6krURIb6LFF3').then((res) => {
            setLoadPic(res.data)
      }).then(console.log(loadPic.url))
    })

    return (
       <Router>
        <div>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/search"><Search /></Route>
            <Route exact path="/favourites"><Favourites /></Route>
            <Route exact path="/favourite/:id" exact render={({ match }) => <MediaCard  match={match} />}/>
        </div> 
        <img src={loadPic.hdurl}></img>
        </Router> 
    )
}

export default Container;