import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="bg-rose-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo / Title */}
        <NavLink to="/">
          <h1 className="text-2xl font-bold">MyShop</h1>
        </NavLink>

        {/* Navigation */}
        <nav className="space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/order">Order</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
