import React from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const Menubar = () => {
    const { user, logOut } = useContext(AuthContext);

    console.log(user?.email);

    const handleLogout = () => {
        logOut()
            .then()
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="header-content">
            <div className="logo">Toys Galaxy</div>
            <div id="menu-container">
                <Link to="/">
                    <div>Home</div>
                </Link>

                <Link to="/blog">
                    <div>Blog</div>
                </Link>

                <Link to="/toysData">
                    <div>Toys Dataaa</div>
                </Link>


                <Link to="/register">
                    <div>Registration</div>
                </Link>

                <div id="signInOut">
                    <div >
                        {user?.email ? (
                            <div id="loggedOutBtn">
                                <div onClick={handleLogout}>Logout</div>
                            </div>
                        ) : (
                            <Link to="/login">
                                <div id="loggedInBtn">Loginnn</div>
                            </Link>
                        )}
                    </div>

                    {/* <div id="userEmail" >{user?.email}</div> */}
                    <img id="image-url" title={user?.email} src={user?.photoURL} alt="img" />

                </div>

            </div>
        </div>
    );
};

export default Menubar;
