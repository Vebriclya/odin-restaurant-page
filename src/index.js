import './style.css';
import WelcomeLeft from './neeliximg.png';
import ScanLines from './scan-7133901_1920.png';



function component() {
    const element = document.createElement('div');
    element.className = "window-div";

    const borderControl = document.createElement('div');
    borderControl.className = 'border-control';

    const pageContainer = document.createElement('div');
    pageContainer.className = 'page-container';

    element.appendChild(borderControl)
    borderControl.appendChild(pageContainer);

    const WelcomeImage = new Image();
    WelcomeImage.src = WelcomeLeft;
    WelcomeImage.className = "welcome-image";

    pageContainer.appendChild(WelcomeImage);

    
    const ScanLineOverlay = new Image();
    ScanLineOverlay.src = ScanLines;
    ScanLineOverlay.className = 'scan-lines';

    pageContainer.appendChild(ScanLineOverlay);

    return element;
}

document.body.appendChild(component());


