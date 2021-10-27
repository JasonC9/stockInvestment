import React, { useEffect, useState } from "react";
import {Container} from './ProfileElements';
import "./Profile.css";
import { isAuthenticated } from "../utilities/authenticationUtils";
import { useHistory } from "react-router";



function Profile(props:any)
{
    const history = useHistory();

    const userData = {
        id: 1,
        first_name: "",
        username: ""
    }
    
    const profileData = {
        id: 1,
        creditCardNumber: 2,
        cvc: 3,
        expireMonth: 4,
        expireYear: 5,
        streetAddress: "",
        city: "",
        state: "",
        zipcode:6,
        user: userData
    }

    useEffect(() => {
        (async () => {
            if (!await isAuthenticated()) {
                // console.log("checked auth")
                history.push("/login");
            }
        })();
    }, []);
    
    const [profile, setProfile] = useState(profileData);

    useEffect(()=>{
        let url='/creditcard/findCreditcard';
        fetch(url,
            {
                method:"GET",
                credentials:"include",
            }).then(response=>response.json())
            .then(pf=>{
                setProfile(pf);
                console.log(pf);
            });
    },[]);


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
            <br/>
            <p className="user-text"> {profile.user.username} </p>
            </div>
            <div>
                <h4>Name: {profile.user.first_name}</h4>
                <div>
                    <h4>Address: {
                    `${profile.streetAddress}
                    ${profile.city}, ${profile.state} ${profile.zipcode}`}</h4>
                </div>
            </div>
        </div>
        </Container>
    </div>
)
}
export default Profile;
