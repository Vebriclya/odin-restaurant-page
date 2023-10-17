import './style.css';
import WelcomeLeft from './neeliximg.png';
import Logo from './logo.png';
import ScanLines from './scan-7133901_1920.png';
import _ from 'lodash';
import { homePage } from './home.js';
import { contactPage } from './contact.js';
import { menuPage } from './menu.js';



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
    //HOME
    const homeLink = document.createElement('div');
    homeLink.className = 'nav-bar-link';
    homeLink.innerHTML = '<a href=' + '>HOME</a>';
    homeLink.addEventListener('click', (event) => {
        event.preventDefault();
        homePage();
    });
    navBar.appendChild(homeLink);

    // MENU
    const menuLink = document.createElement('div');
    menuLink.className = 'nav-bar-link';
    menuLink.innerHTML = '<a href=' + '>MENU</a>';
    menuLink.addEventListener('click', (event) => {
        event.preventDefault();
        menuPage();
    });
    navBar.appendChild(menuLink);

    // CONTACT
    const contactLink = document.createElement('div');
    contactLink.className = 'nav-bar-link';
    contactLink.innerHTML = '<a href=' + '>CONTACT</a>';
    contactLink.addEventListener('click', (event) => {
        event.preventDefault();
        contactPage();
    });
    navBar.appendChild(contactLink);
    
    // Text Container
    const textArea = document.createElement('div');
    textArea.className = "text-area";
    textArea.innerHTML = '<br><b class="menu-headers">Hello, my friends from across the stars!</b> <br><br> Neelix here, your one and only Talaxian culinary genius and host extraordinaire. <br><br> If there\'s one thing I\'ve learned from my adventures aboard the U.S.S. Voyager, it\'s that food has the power to bring people together, no matter where they come from. <br><br> That\'s why I\'m delighted to welcome you to <b>\"Neelix\'s Nebula Bistro,\"</b> the galaxy\'s most exciting and diverse culinary destination.';
    contentContainer.appendChild(textArea);


    return element;
}

document.body.appendChild(component());


