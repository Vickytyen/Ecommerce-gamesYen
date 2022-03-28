const Navbar = () => {
    return (
      <div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              CATEGORIA 1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              CATEGORIA 2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              CATEGORIA 3
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              CATEGORIA 4
            </a>
          </li>
        </ul>
      </div>
    );
}

export default Navbar;