import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside id="sidebar" class="sidebar">
      <ul class="sidebar-nav" id="sidebar-nav">
        <li class="nav-item">
          <Link class="nav-link collapsed" to="/Home">
            <i class="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link collapsed" to="/Buyers">
            <i class="bx bxs-group"></i>
            <span>Buyers</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link collapsed" to="/Users">
            <i
              class=" ri-account-box-line
"
            ></i>
            <span>Users</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link collapsed" to="/Product">
            <i class="bx bxs-archive"></i>
            <span>Product</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
