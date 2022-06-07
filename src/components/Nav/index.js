import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

function Nav(props) {
  const {
    navLinks = [],
    setCurrentActiveNav,
    contactSelected,
    currentActiveNav,
    setContactSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> </span> Jesse Lemieux
        </a>
      </h2>
      <nav>
      <Breadcrumb BreadcrumbSeparator={'-'}>

          {navLinks.map((navLink) => (
            
            <BreadcrumbItem>
            <div
              className={`mx-1 ${
                currentActiveNav.name === navLink.name && !contactSelected && 'navActive'
                }`}
              key={navLink.name}
            >
              <span
                onClick={() => {
                  setCurrentActiveNav(navLink);
                  setContactSelected(false);
                }}
              >
              <BreadcrumbLink>
                {capitalizeFirstLetter(navLink.name)}
                </BreadcrumbLink>
              </span>
            </div>
            </BreadcrumbItem>
           
          ))}
          <BreadcrumbItem>
          <div className={`mx-2 ${contactSelected && 'navActive'}`}>
          <BreadcrumbLink>
            <span onClick={() => setContactSelected(true)}>Contact</span>
            </BreadcrumbLink>
          </div>
          </BreadcrumbItem>
        </Breadcrumb>
      </nav>
    </header>
  );
}

export default Nav;