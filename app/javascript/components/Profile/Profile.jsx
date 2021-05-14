import React from 'react'

const Profile = (props) => {
    return (  
        <>
            <h1>Profile Page</h1>
            <h1>{props.loggedInStatus}</h1>
        </>
    );
}
 
export default Profile;