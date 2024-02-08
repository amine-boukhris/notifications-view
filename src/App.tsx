import React from "react";
import Header from "./components/Header.tsx";
import NotificationsContainer from "./components/NotificationsContainer.tsx";

function App() {
    return (
        <div>
            <Header notificationsCount={3}></Header>
            <NotificationsContainer></NotificationsContainer>
        </div>
    );
}

export default App;
