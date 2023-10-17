import './style.css';
import WelcomeLeft from './neeliximg.png';
import Logo from './logo.png';
import ScanLines from './scan-7133901_1920.png';
import _ from 'lodash';


function component() {
    //This selects the entire window
    const element = document.createElement('div');
    element.className = "window-div";

    //This is your main container
    const pageContainer = document.createElement('div');
    pageContainer.className = 'page-container';
    element.appendChild(pageContainer);

    // Here's Neelix
    const WelcomeImage = new Image();
    WelcomeImage.src = WelcomeLeft;
    WelcomeImage.className = "welcome-image";
    pageContainer.appendChild(WelcomeImage);

    // Here's his logo
    const SpinningLogo = new Image();
    SpinningLogo.src = Logo;
    SpinningLogo.className = "spinning-logo";
    pageContainer.appendChild(SpinningLogo);

    // Scan Lines
    const ScanLineOverlay = new Image();
    ScanLineOverlay.src = ScanLines;
    ScanLineOverlay.className = 'scan-lines';
    pageContainer.appendChild(ScanLineOverlay);

    // Container for actual content
    const contentContainer = document.createElement('div');
    contentContainer.className = 'content-container';
    pageContainer.appendChild(contentContainer);

    // Nav Bar
    const navBar = document.createElement('div');
    navBar.className =  'nav-bar';
    contentContainer.appendChild(navBar);

    // Nav Bar Links
    const homeLink = document.createElement('div');
    homeLink.className = 'nav-bar-link';
    homeLink.innerHTML = '<a href=' + '>HOME</a>';
    navBar.appendChild(homeLink);
    const menuLink = document.createElement('div');
    menuLink.className = 'nav-bar-link';
    menuLink.innerHTML = '<a href=' + '>MENU</a>';
    navBar.appendChild(menuLink);
    const contactLink = document.createElement('div');
    contactLink.className = 'nav-bar-link';
    contactLink.innerHTML = '<a href=' + '>CONTACT</a>';
    navBar.appendChild(contactLink);
    

    return element;
}

document.body.appendChild(component());

