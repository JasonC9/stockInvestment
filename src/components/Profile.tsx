import React from 'react';
import {Container} from './ProfileElements';
import "./Profile.css";



function Profile(props:any)
{
return(
    <div>
        <Container>
        <div style={{
            display:"flex",
            margin:"18px 0px"
        }}>
            <div>
            <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
            src='https://st2.depositphotos.com/5682790/10456/v/600/depositphotos_104564156-stock-illustration-male-user-icon.jpg'/>
            <p>Test</p>
            </div>
            <div>
                <h4>Name:</h4>
                <div>
                    <h4>Address</h4>
                </div>
            </div>
        </div>
        </Container>
    </div>
)
}
export default Profile;