import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileCard.css';

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <div className="profile-card__info">
                <Link to="/profile" className="profile-link">
                    Your Profile
                </Link>
            </div>
        </div>
    );
};

export default ProfileCard;
