import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './header.css';
import logo from './assets/logo.png';
import layout from './assets/layout.png'
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import Button from './button/Button'


const Header = () => {
    const [user, setUser] = useState({});

    const getUser = async()=>{
        try{
            const response = await axios.get('https://devapi.2gathers.com/api/events/view-event_new/?eventId=257&eventUniqueNo=1662391471')
            setUser(response.data.eventDetails[0])
        }
        catch(error){
            console.log(error)
        }
    }
    
    useEffect(() => {
        getUser();
    },[]);

    console.log(user);

    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}  ${current.getHours()}:${current.getMinutes()}`;
    

  return (
    <>
        <div className='header container-fluid d-flex' >
                <img className='img' src={logo} alt="logo"/>
                <div className='logo-details'>
                    <h4>{user.eventName}</h4>
                    <p>{date}</p>
                </div>
            <div className='social'>
                <div>
                    <p className='active'><span className='active-btn'><CheckCircleOutlineRoundedIcon/></span> Active</p>
                </div>
                <div className='d-flex'>
                    <p><FileCopyRoundedIcon/></p>
                    <p><ShareRoundedIcon/></p>
                </div>
            </div>
        </div>
        <div className='clear-both'></div>
            
                <div className='event-des d-flex flex-row'>
                    <p>Event type <br/><span>{user.eventType}</span></p>
                    <p className='p1'>Category <br/><span>{user.eventCategory}</span></p>
                    <p className='p2'>Maximum Capacity <br/><span>{user.eventCapacity}</span></p>
                </div>
                <div className='event-des d-flex flex-row'>
                    <p>Public Event <br/><span>{user.publicEvent}</span></p>
                    <p>Location <br/><span>{user.location}</span></p>
                    <p>Allow User To Reserve Box <br/><span>{user.allowUsersToReserveBox}</span></p>
                </div>
                <div className='hero-mid d-flex'>
                    <img src={layout} alt="layout" />
                    <p className='p3'>Description<span>{user.eventDescription}</span></p>
                </div>
            
            <div className='button-c d-flex'>
                <button className='end'>END EVENT</button>
                <div className='button-b d-flex'>
                <Button
                    type={"Submit"}
                    value={"STREAMING"}
                    isDisabled={false}
                />
                <Button
                    type={"Submit"}
                    value={"EDIT EVENT"}
                    isDisabled={false}
                />
                <Button
                    type={"Submit"}
                    value={"RESERVE BOX"}
                    isDisabled={false}
                />
                <Button
                    type={"Submit"}
                    value={"RESERVE BOX"}
                    isDisabled={false}
                />
                <Button
                    type={"Submit"}
                    value={"ADD PARICIPANTS"}
                    isDisabled={false}
                />
                <Button
                    type={"Submit"}
                    value={"VIEWPROMO"}
                    isDisabled={false}
                />
                <Button
                    type={"Submit"}
                    value={"VIEW INVITEES"}
                    isDisabled={false}
                />
                <Button
                    type={"Submit"}
                    value={"JOIN AS HOST"}
                    isDisabled={false}
                />
                </div>
                
            </div>

        
    </>
  )
}

export default Header