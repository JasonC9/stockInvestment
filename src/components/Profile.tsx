import React, { useEffect, useState } from "react";
import {Container} from './ProfileElements';
import "./Profile.css";
import { isAuthenticated } from "../utilities/authenticationUtils";
import { useHistory } from "react-router";



function Profile(props:any)
{
    const history = useHistory();
    const profileData = {
        username: "",
        firstname: "",
        streetAddress: "",


    }
    const sendUser = async (user:String,fname:String,street:String,c) => {
        let data = {
            username: user,
            firstname: fname,
            streetAddress: street,
            city:
        }

    }
    useEffect(() => {
        (async () => {
            if (!await isAuthenticated()) {
                // console.log("checked auth")
                history.push("/login");
            }
        })();
    }, []);
    const [profile, setProfile] = useState([profileData]);

    useEffect(()=>{
        let url='creditCard/findAll';
        fetch(url,
            {
                method:"GET",
                credentials:"include",
            }).then(response=>response.json())
            .then(pf=>{
                setProfile(pf)
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
            <p className="user-text">User</p>
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
