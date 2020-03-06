import React, { Component } from 'react'
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile =props => {
  
        const {link, image }  = props.socialProfile;
        return (
            <span>
                <a href={link}><img src={image} alt="social-profile" style={{margin:10,width:35, hight:35}} /></a>
            </span>
        )

}

const SocialProfiles = () =>{
        return (
            <div>
                <h2> Connect With me</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                             return<SocialProfile key={SOCIAL_PROFILE.id}
                             socialProfile={SOCIAL_PROFILE}  />
                        })
                    }
                </div>
             </div>
        )
    }

export default SocialProfiles;