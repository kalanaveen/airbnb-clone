import React, { useState } from 'react';
import './DateChooser.css';
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Button } from '@material-ui/core';
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from 'react-router';
function DateChooser() {
    const history = useHistory();
    const[startDate,setStartDate] = useState(new Date());
    const[endDate,setEndDate] = useState(new Date());

    const selectionRange = {
        startDate,
        endDate,
        key:'selection'
    };
    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
        <div className = "dateChooser">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
            <h2>Number Of Guests <PeopleIcon/></h2>
            <input min={0} defaultValue={1} type="number"/>
            <Button onClick = {()=>history.push('/search')}>Search Airbnb</Button>
        </div>
    );
};

export default DateChooser;
