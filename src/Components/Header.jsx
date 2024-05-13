import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <div class="navbar-nav">
                        <NavLink className="nav-link" to="/" end>Home</NavLink>
                        < NavLink className="nav-link" to="categories">Categories</NavLink>
                        < NavLink className="nav-link" to="newcollections">New Collections</NavLink>
                    </div>
                    <div class="navbar-nav d-flex justify-content-end">
                < Link class="btn btn-info me-2" to="login">Log in</Link>
                < Link class="btn btn-warning" to="register">Register</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;