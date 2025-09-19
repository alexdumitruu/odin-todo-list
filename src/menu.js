import image1 from './images/menu1.png';
import image2 from './images/menu2.png';
import image3 from './images/menu3.png';

const menuPage = () => {
    const container = document.createElement('div');

    let img1 = document.createElement('img');
    let img2 = document.createElement('img');
    let img3 = document.createElement('img');

    img1.src = image1;
    img1.alt = "Menu Picture";
    img2.src = image2;
    img2.alt = "Menu Picture";
    img3.src = image3;
    img3.alt = "Menu Picture";

    container.appendChild(img1);
    container.appendChild(img2);
    container.appendChild(img3);
    return container;
}

export { menuPage };