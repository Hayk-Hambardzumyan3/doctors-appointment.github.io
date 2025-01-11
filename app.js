// Optimized Version: Modular and Scalable Approach (Using Event Listeners)
const buttonLinks = [
    { name: 'Մարգարյան Նորայր Աշոտի', url: 'https://calendar.app.google/Ham4M5iy6qRDVbDZ8' },
    { name: 'Հակոբյան Ալեքսանդր Գուրգենի', url: 'https://calendar.app.google/T7cYu9u9QziZbWyN8' },
    { name: 'Պողոսյան Ստեփան Գառնիկի', url: 'https://calendar.app.google/LniqkgkCNdk3h3Na7' },
    { name: 'Հակոբյան Աշոտ Մարատի', url: 'https://calendar.app.google/hv3KbHREKa8DsfZx6' },
    { name: 'Գրիգորյան Սոնյա Կառլենի', url: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3gLgTekt8kQe4mxDEhTxkTm9YH0aNLcmV9vUnaq1gRcjOBIIiN1VrZALEanII8ke5CGo_9qQky' },
    { name: 'Եղյան Նեկտար Բագրատի', url: 'https://calendar.app.google/6tvevypbTzxPvBHJ8' },
    { name: 'Խուրշուդյան Ալլա Դմիտրիի', url: 'https://calendar.app.google/GvLScEQyxMjYjgDRA' },
    { name: 'Պողոսյան Անահիտ Հրաչիկի', url: 'https://calendar.app.google/d5vfRrc38TrFfABj8' },
    { name: 'Միքայելյան Նաիրի Ռաֆայելի', url: 'https://calendar.app.google/WNinrzi8kAZ3RGcG6' },
    { name: 'Բադալյան Հասմիկ Ռոբերտի', url: 'https://calendar.app.google/4TyprM8Bw1d5Wbqq9'},
    // Add more objects here (total 30, each with a unique name and URL)
];

// Function to create buttons dynamically
function createButtonGrid(links) {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(5, 1fr)';
    container.style.gap = '15px';

    links.forEach(({ name, url }) => {
        const button = document.createElement('button');
        button.textContent = name;
        button.style.padding = '15px';

        button.addEventListener('click', () => {
            window.open(url, '_blank');
        });

        container.appendChild(button);
    });

    return container;
}

// Append the button grid to the document body
document.body.appendChild(createButtonGrid(buttonLinks));
