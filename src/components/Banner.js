import React, { useState } from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import DateChooser from './DateChooser';
import { useHistory } from 'react-router';

function Banner() {
    const history = useHistory();
    const[showSearch,setShowSearch] = useState(false);
    return (
        <div className='banner'>
           <div className = 'banner__search'>
               {showSearch && <DateChooser/>}
               <Button onClick={()=>setShowSearch(!showSearch)} className="banner__searchButton" variant="outlined">{showSearch ? "Hide":"Search Dates"}</Button>
           </div>
            <div className="banner__info">
                <h1>Get Out And Stretch Your Imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button variant='outlined' onClick={()=>history.push('/search')}>Explore NearBy</Button>
            </div>
        </div>
    )
}

export default Banner;
