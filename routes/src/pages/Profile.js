import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    let navigate = useNavigate();

    return (
        <div>
            this is the profile page.{""}<button onClick={()=>{
                navigate("/about")
            }
        }>Go to about PAGE</button>
        </div>
    );
};

export default Profile;