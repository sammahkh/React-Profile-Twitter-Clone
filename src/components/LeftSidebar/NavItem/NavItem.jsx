import "./NavItem.css";

const NavItem = ({ icon, label }) => {
  return (
    <li className="nav-item">
      <span className="icon">{icon}</span>
      <span className="label">{label}</span>
    </li>
  );
};

export default NavItem;
