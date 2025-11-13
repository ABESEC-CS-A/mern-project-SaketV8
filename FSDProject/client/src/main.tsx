import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout.tsx";
import PageNotFound from "../components/PageNotFound.tsx";
import UserDashboard from "../components/UserDashboard.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<h1>this is cart section</h1>} />
          <Route path="/order" element={<h1>this is order section</h1>} />
          <Route path="/about" element={<h1>this is about section</h1>} />

          {/* for user */}
          <Route path="/user" element={<UserDashboard />}>
            <Route index element={<h1>Shopping Items</h1>} />
            <Route path="cart" element={<h1>My Cart</h1>} />
            <Route path="order" element={<h1>View orders</h1>} />
            <Route path="profile" element={<h1>Profile Page</h1>} />
            <Route path="logout" element={<h1>Logout Page</h1>} />
          </Route>

          {/* for admin */}
          <Route path="/admin" element={<UserDashboard />}>
            <Route index element={<h1>Admin Dashboard</h1>} />
            <Route path="additem" element={<h1>Add Item</h1>} />
            <Route path="viewitem" element={<h1>View Items</h1>} />
            <Route path="adduser" element={<h1>Add User</h1>} />
            <Route path="viewuser" element={<h1>List of users</h1>} />
            <Route path="logout" element={<h1>Logout Page</h1>} />
          </Route>

          {/* Error 404 */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
