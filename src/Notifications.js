import React from "react";
import './Notification.css';
import closebtn from './close-icon.png';
import { getLatestNotification } from "./utils";


const Notifications = () => {

    // HANDLING BUTTON CLOSE CLICKS
    const handleCloseClick = () => {
        console.log("Close button has been clicked");
    };

    return (
        <div className="Notification">
            <button
                style={{
                    position: "absolute",
                    right: "10px",
                    top: "10px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                }}
                aria-label="Close"
                onClick={handleCloseClick}
            >
                <img src={closebtn} alt="Close button" style={{ width: "10px", height: "10px" }} />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority ='default'>New course available</li>
                <li data-priority ='urgent'>New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    );
};

export default Notifications;
