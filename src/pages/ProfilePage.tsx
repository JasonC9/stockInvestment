import React, {useState} from 'react';
import Navb from '../components/navbar';
import Profile from '../components/Profile';

export default function ProfilePage() 
{

    return (
        <div style={{ backgroundColor: "#ADD8E6" }}>
            <Navb />
            <Profile />

        </div>
    )
}