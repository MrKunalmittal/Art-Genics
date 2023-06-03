
function Header(props) {
    return (
      <header>
          <div className="container flex">
              <div className="header-title">
                  <h1>{props.name}</h1>
              </div>
              <div className="nav-bar">
                  <ul>
                      <li><a href="#" target="_self"><p>Visit</p></a></li>
                      <li><a href="#" target="_self"><p>Art</p></a></li>
                      <li><a href="#" target="_self"><p>Learn</p></a></li>
                      <li><a href="#" target="_self"><p>About</p></a></li>
                  </ul>
              </div>
          </div>
      </header>
    )
  }
  
  export default Header