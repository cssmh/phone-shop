import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="shadow-md py-5 px-8 lg:px-16 flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-semibold">Phone Shop</h1>
            </div>
            <div className="space-x-2 md:space-x-6">
                <NavLink to="/" className={({ isActive }) => isActive ? "text-green-500 underline" : ""}> Home</NavLink>
                <NavLink to="/favorite" className={({ isActive }) => isActive ? "text-green-500 underline" : ""}> Favorite</NavLink>
                <NavLink to="/login" className={({ isActive }) => isActive ? "text-green-500 underline" : ""}> Login</NavLink>
            </div>
        </div>
    );
};

export default Header;