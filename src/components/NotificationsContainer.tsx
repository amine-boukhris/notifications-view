import React from "react";
import NotificationCard from "./NotificationCard.tsx";
import "./NotificationsContainer.css";
import avatarAngelaGray from "../assets/images/avatar-angela-gray.webp";
import avatarAnnaKim from "../assets/images/avatar-anna-kim.webp";
import avatarJacobThompson from "../assets/images/avatar-jacob-thompson.webp";
import avatarKimberlySmith from "../assets/images/avatar-kimberly-smith.webp";
import avatarMarkWebber from "../assets/images/avatar-mark-webber.webp";
import avatarNathanPeterson from "../assets/images/avatar-nathan-peterson.webp";
import avatarRizkyHasanuddin from "../assets/images/avatar-rizky-hasanuddin.webp";
// import avatar from '../assets/images/favicon-32x32.png'; don't know what these for
import postImageChess from "../assets/images/image-chess.webp";

const NotificationsContainer: React.FC = () => {
    return (
        <div className="notifications-container container">
            <NotificationCard
                isRead={false}
                imageUrl={avatarMarkWebber}
                name={"Mark Webber"}
                time={"1m ago"}
                action={"reacted to your post"}
                extraInfoPost="My first tournament today!"
            ></NotificationCard>
            <NotificationCard
                isRead={false}
                imageUrl={avatarAngelaGray}
                name={"Angela Gray"}
                time={"5m ago"}
                action={"followed you"}
            ></NotificationCard>
            <NotificationCard
                isRead={false}
                imageUrl={avatarJacobThompson}
                name={"Jacob Thompson"}
                time={"1 day ago"}
                action={"has joined your group"}
                extraInfoGroup="Chess Club"
            ></NotificationCard>
            <NotificationCard
                isRead={true}
                imageUrl={avatarRizkyHasanuddin}
                name={"Rizky Hasanuddin"}
                time={"5 day ago"}
                action={"sent you a private message"}
                message="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
                I'm already having lots of fun and improving my game."
            ></NotificationCard>
            <NotificationCard
                isRead={true}
                imageUrl={avatarKimberlySmith}
                name={"Kimberly Smith"}
                time={"1 week ago"}
                action={"commented on your picture"}
                postImageUrl={postImageChess}
            ></NotificationCard>
            <NotificationCard
                isRead={true}
                imageUrl={avatarNathanPeterson}
                name={"Nathan Peterson"}
                time={"2 weeks ago"}
                action={"reacted to your recent post"}
                extraInfoPost="5 end-game strategies to increase your win rate"
            ></NotificationCard>
            <NotificationCard
                isRead={true}
                imageUrl={avatarAnnaKim}
                name={"Anna Kim"}
                time={"2 weeks ago"}
                action={"left the group"}
                extraInfoGroup="Chess Club"
            ></NotificationCard>
        </div>
    );
};

export default NotificationsContainer;
