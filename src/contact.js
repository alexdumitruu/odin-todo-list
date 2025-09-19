

const contactPage = () => {
    const container = document.createElement('div');
    let firstHeader = document.createElement('h3');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');
    let p6 = document.createElement('p');
    let br = document.createElement('br');
    let secondHeader = document.createElement('h3');
    let p7 = document.createElement('p');
    
    firstHeader.textContent = 'Contact Bucuresti';
    p1.textContent = 'MegaMall – 0728 180 003';
    p2.textContent = 'Promenada – 0728 180 002';
    p3.textContent = 'Aviatorilor – 0742 146 499';
    p4.textContent = 'Plaza – 0725 598 639';
    p5.textContent = 'Baneasa – 0728 180 004';
    p6.textContent = 'DN1 – 0735 538 603';
    secondHeader.textContent = 'Contact Comenzi';
    p7.textContent = 'Telefon: +40 765 023 990';

    container.appendChild(firstHeader);
    container.appendChild(p1);
    container.appendChild(p2);
    container.appendChild(p3);
    container.appendChild(p4);
    container.appendChild(p5);
    container.appendChild(p6);
    container.appendChild(br);
    container.appendChild(secondHeader);
    container.appendChild(p7);
    return container;
};

export { contactPage };