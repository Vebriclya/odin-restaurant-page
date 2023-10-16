import './style.css';
import NeelixHeaderImg from './neelix-header.jpeg';



function component() {
    const element = document.createElement('div');

    const NeelixHeader = new Image();
    NeelixHeader.src = NeelixHeaderImg;
    NeelixHeader.className = "header-image";

    element.appendChild(NeelixHeader);

    return element;
}

document.body.appendChild(component());


