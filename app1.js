// Optimized Version: Modular and Scalable Approach (With Images and Buttons)
const buttonLinks = [
    { name: 'Մարգարյան Նորայր Աշոտի', url: 'https://calendar.app.google/Ham4M5iy6qRDVbDZ8', img: 'https://via.placeholder.com/100?text=Google' },
    { name: 'YouTube', url: 'https://www.youtube.com', img: 'https://via.placeholder.com/100?text=YouTube' },
    { name: 'GitHub', url: 'https://github.com', img: 'https://via.placeholder.com/100?text=GitHub' },
    { name: 'Մարգարյան Նորայր Աշոտի', url: 'https://calendar.app.google/Ham4M5iy6qRDVbDZ8', img: 'https://via.placeholder.com/100?text=Google' },
    { name: 'YouTube', url: 'https://www.youtube.com', img: 'https://via.placeholder.com/100?text=YouTube' },
    { name: 'GitHub', url: 'https://github.com', img: 'https://via.placeholder.com/100?text=GitHub' },
    { name: 'Մարգարյան Նորայր Աշոտի', url: 'https://calendar.app.google/Ham4M5iy6qRDVbDZ8', img: 'https://via.placeholder.com/100?text=Google' },
    { name: 'YouTube', url: 'https://www.youtube.com', img: 'https://via.placeholder.com/100?text=YouTube' },
    { name: 'GitHub', url: 'https://github.com', img: 'https://via.placeholder.com/100?text=GitHub' },
    { name: 'Մարգարյան Նորայր Աշոտի', url: 'https://calendar.app.google/Ham4M5iy6qRDVbDZ8', img: 'https://via.placeholder.com/100?text=Google' },
    { name: 'YouTube', url: 'https://www.youtube.com', img: 'https://via.placeholder.com/100?text=YouTube' },
    { name: 'GitHub', url: 'https://github.com', img: 'https://via.placeholder.com/100?text=GitHub' },
    { name: 'Մարգարյան Նորայր Աշոտի', url: 'https://calendar.app.google/Ham4M5iy6qRDVbDZ8', img: 'https://via.placeholder.com/100?text=Google' },
    { name: 'YouTube', url: 'https://www.youtube.com', img: 'https://via.placeholder.com/100?text=YouTube' },
    { name: 'GitHub', url: 'https://github.com', img: 'https://via.placeholder.com/100?text=GitHub' },
    // Add more objects here (total 30, each with a unique name, URL, and image link)
];

// Function to create buttons and images dynamically
function createButtonGrid(links) {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(5, 1fr)';
    container.style.gap = '10px';

    links.forEach(({ name, url, img }) => {
        const wrapper = document.createElement('div');
        wrapper.style.textAlign = 'center';

        const image = document.createElement('img');
        image.src = img;
        image.alt = name;
        image.style.cursor = 'pointer';
        image.style.width = '100px';
        image.style.height = '100px';
        image.style.display = 'block';
        image.style.margin = '0 auto 5px';

        image.addEventListener('click', () => {
            window.open(url, '_blank');
        });

        const button = document.createElement('button');
        button.textContent = name;
        button.style.padding = '10px';
        button.style.cursor = 'pointer';

        button.addEventListener('click', () => {
            window.open(url, '_blank');
        });

        wrapper.appendChild(image);
        wrapper.appendChild(button);
        container.appendChild(wrapper);
    });

    return container;
}

// Append the button grid to the document body
document.body.appendChild(createButtonGrid(buttonLinks));
