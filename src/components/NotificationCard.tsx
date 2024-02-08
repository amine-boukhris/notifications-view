import React from "react";
import "./NotificationCard.css";

interface NotificationCardProps {
    isRead: boolean;
    name: string;
    time: string;
    action: string;
    imageAlt?: string;
    imageUrl?: string;
    message?: string;
    extraInfoPost?: string;
    extraInfoGroup?: string;
    postImageUrl?: string;
    postImageAlt?: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
    isRead,
    name,
    time,
    action,
    imageAlt,
    imageUrl,
    message,
    extraInfoPost,
    extraInfoGroup,
    postImageUrl,
    postImageAlt,
}) => {
    return (
        <div className={`notification-card ${isRead ? "read" : "unread"}`}>
            <div className="notification-card__profile-image">
                <img src={imageUrl} alt={imageAlt} />
            </div>
            <div className="notification-card__content">
                <p className="notification-card__content-text">
                    <span className="notification-card__name">{name}&nbsp;&nbsp;</span>
                    <span className="notification-card__action">{action}</span>
                    {extraInfoGroup && (
                        <span className="notification-card__extraInfoGroup">
                            &nbsp;&nbsp;{extraInfoGroup}
                        </span>
                    )}
                    {extraInfoPost && (
                        <span className="notification-card__extraInfoPost">
                            &nbsp;&nbsp;{extraInfoPost}
                        </span>
                    )}
                    {!isRead && (
                        <span className="notification-card__bullet">&nbsp;&nbsp;&bull;</span>
                    )}
                </p>
                <span className="notification-card__time">{time}</span>
                {message && <p className="notification-card__message">{message}</p>}
            </div>

            {postImageUrl && (
                <div className="notification-card__postImage">
                    <img src={postImageUrl} alt={postImageAlt} />
                </div>
            )}
        </div>
    );
};

export default NotificationCard;
