import Nav from '../Nav'

function Header(props){

    const {
        navLinks = [],
        setCurrentActiveNav,
        contactSelected,
        currentActiveNav,
        setContactSelected,
      } = props;
      return (
        <Nav
        navLinks={navLinks}
        setCurrentActiveNav={setCurrentActiveNav}
        currentActiveNav={currentActiveNav}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      )    
}

export default Header;