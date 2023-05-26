import { Link } from "react-router-dom";
// const ComponentName = (props) => {}
const Header = ({ title, subtitle = "Default subtitle" }) => {
    return (
        <header className="bg-dark text-light py-5">
            <div className="container">
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;