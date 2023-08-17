import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="title-container">Freggies</div>
      <div className="links-container">
        <ul className="links">
        <li>
          <div class="search-utils">
            <input type="text" placeholder="Search" class="searchbar" />
            <button class="search-submit">Submit &nbsp;</button>
          </div>
          </li>
          <li className="link"> <a href="#home"> Home </a> </li>
          <li className="link"> <a href="#about"> About </a> </li>
          <li className="link"> <a href="#cart"> Cart </a> </li>
          <li className="link"> <a href="#fruits"> Fruits </a> </li>
          <li className="link"> <a href="#vegetables"> Vegetables </a> </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar