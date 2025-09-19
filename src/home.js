export { homePage };
import restaurantImage from './images/image.png';

const homePage = () => {
    const container = document.createElement('div');
    let image = document.createElement('img');
    image.src = restaurantImage;
    image.alt = "restaurant-picture"
    container.appendChild(image);

    let header = document.createElement('h2');
    header.textContent = 'MANUFAKTURA THE COFFEE SHOP RESTAURANT';
    container.appendChild(header);

    let firstP = document.createElement('p');
    let secondP = document.createElement('p');
    firstP.textContent = 'Manufaktura The Coffee Shop Restaurant transforma fiecare experienta intr-o poveste cu note personalizate, fie ca e vorba de mancare buna sau cea mai buna cafea. Conceptul de coffee shop restaurant este unic in Romania si probabil in lume, oferind o experienta unica de coffee shop si restaurant in acelasi loc.';
    secondP.textContent = 'Experienta unei cafele desavarsite este sustinuta de spectaculoasa linie de rasnire, in jurul caruia a fost gandit intregul concept Manufaktura. Utilajul exclusivist este un produs 100% romanesc, creat si proiectat manual la Cluj, special pentru Manufaktura.';
    container.appendChild(firstP);
    container.appendChild(secondP);
    return container;
}