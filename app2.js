// Optimized Version: Modular and Scalable Approach (With Persistent Authentication and Logout)
import { users } from './users.js';

// Optimized Version: Modular and Scalable Approach (Using Event Listeners)
const buttonLinks = [
    { name: 'Մարգարյան Նորայր Աշոտի (Գաստրոէնտերոլոգ)', url: 'https://calendar.app.google/Ham4M5iy6qRDVbDZ8' },
    { name: 'Հակոբյան Ալեքսանդր Գուրգենի (Գաստրոսկոպիա, Կոլոնոսկոպիա)', url: 'https://calendar.app.google/T7cYu9u9QziZbWyN8' },
    { name: 'Պողոսյան Ստեփան Գառնիկի (Գաստրոսկոպիա, Կոլոնոսկոպիա)', url: 'https://calendar.app.google/LniqkgkCNdk3h3Na7' },
    { name: 'Հակոբյան Աշոտ Մարատի (Վիրաբույժ)', url: 'https://calendar.app.google/hv3KbHREKa8DsfZx6' },
    { name: 'Գրիգորյան Սոնյա Կառլենի (Էլեկտրոնեյրոմիոգրաֆիա)', url: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3gLgTekt8kQe4mxDEhTxkTm9YH0aNLcmV9vUnaq1gRcjOBIIiN1VrZALEanII8ke5CGo_9qQky' },
    { name: 'Եղյան Նեկտար Բագրատի (Նյարդաբան)', url: 'https://calendar.app.google/6tvevypbTzxPvBHJ8' },
    { name: 'Խուրշուդյան Ալլա Դմիտրիի (Սրտաբան)', url: 'https://calendar.app.google/GvLScEQyxMjYjgDRA' },
    { name: 'Պողոսյան Անահիտ Հրաչիկի (Սրտաբան)', url: 'https://calendar.app.google/d5vfRrc38TrFfABj8' },
    { name: 'Միքայելյան Նաիրի Ռաֆայելի (Էխոկարդիոգրաֆիա)', url: 'https://calendar.app.google/WNinrzi8kAZ3RGcG6' },
    { name: 'Բադալյան Հասմիկ Ռոբերտի (Էնդոկրինոլոգ)', url: 'https://calendar.app.google/4TyprM8Bw1d5Wbqq9'},
    { name: 'Մխիթարյան Արևիկ Հրանտի (Ակնաբան)', url: 'https://calendar.app.google/WVuK8QDryTngdP4V9'},
    { name: 'Փարսադանյան Հայկուհի Միշայի (Մաշկաբան)', url: 'https://calendar.app.google/4S3x1f9ZR3Ru4yYFA'},
    { name: 'Պողոսյան Նաիրա Մարտինի (Սոնոգրաֆիա)', url: 'https://calendar.app.google/CmvTgWcr97z5nTgDA'},
    { name: 'Սողոմոնյան Վիգեն Կարենի / Հակոբյան Անի Վիտորի (ԿՏ)', url: 'https://calendar.app.google/Ybkp1kJZh51TCRHw8'},
    { name: 'Էլոյան Սաթենիկ Հրաչիկի (Ռենտգենոլոգ, Դենսիտոմետրիա)', url: 'https://calendar.app.google/SciRsbtwTopDZst9A'},
    { name: 'Ավանեսյան Անժելիկա Վյաչեսլավի (Քիթ-Կոկոդր-Ականջաբան)', url: 'https://calendar.app.google/JvaLpQrTa3ePFjGo6'},
    { name: 'Հարությունյան Մարինե Ստալիկի (Թոքաբան, Թերապևտ)',url: 'https://calendar.app.google/aQ4spZ69XZAW2ERE7'},
    { name: 'Խոջայան Ռուզաննա Լևոնի (Սոնոգրաֆիա)', url: 'https://calendar.app.google/ir4i9vb6zfhxYfDp9'},
    { name: 'Մակարյան Կարինե Սուրիկի (Հոդի սոնոգրաֆիա)', url: 'https://calendar.app.google/j7xBvWabRdnmLwwMA'},
    { name: 'Մակարյան Նարինե Սուրիկի (Դուպլեքս)', url: 'https://calendar.app.google/2gWCsY51wPdiDszn7'},
    { name: 'Դարբինյան Գոհար Էդուարդի (Դուպլեքս)', url: 'https://calendar.app.google/EGizMvfU6QYSSCqp7'},
    { name: 'Մարտիրոյան Հռիփսիմե Ալեքսանդրի (ԷԷԳ)', url: 'https://calendar.app.google/deN3pDHzZnFeLB41A'},
    { name: 'Զոհրաբյան Կարմեն Արամի (Գինեկոլոգ)', url: 'https://calendar.app.google/tC5CBm5p3WUGzENb8'},
    { name: 'Մինասյան Արեգ Արթուրի (Ուրոլոգ)', url: 'https://calendar.app.google/RfoMvJvJimf1sL2B8'},
    { name: 'Չոփուրյան Նարեկ Վասիլի (Հոդաբան)', url: 'https://calendar.app.google/oiBLdrtjmckEeRqu5'},

    // Add more objects here (total 30, each with a unique name and URL)
];

// Function to display login form
function displayLoginForm() {
    const loginContainer = document.createElement('div');
    loginContainer.style.display = 'flex';
    loginContainer.style.flexDirection = 'column';
    loginContainer.style.alignItems = 'center';
    loginContainer.style.justifyContent = 'center';
    loginContainer.style.height = '100vh';
    loginContainer.style.backgroundColor = '#f0f8ff';
    loginContainer.style.fontFamily = 'Arial, sans-serif';

    const title = document.createElement('h1');
    title.textContent = 'Մուտք գործեք համակարգ';
    title.style.color = '#333';

    const loginForm = document.createElement('form');
    loginForm.style.display = 'flex';
    loginForm.style.flexDirection = 'column';
    loginForm.style.alignItems = 'center';
    loginForm.style.backgroundColor = '#ffffff';
    loginForm.style.padding = '20px';
    loginForm.style.borderRadius = '8px';
    loginForm.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.placeholder = 'Մուտքանուն';
    usernameInput.style.margin = '10px 0';
    usernameInput.style.padding = '10px';
    usernameInput.style.width = '250px';
    usernameInput.style.border = '1px solid #ccc';
    usernameInput.style.borderRadius = '4px';

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Գաղտնաբառ';
    passwordInput.style.margin = '10px 0';
    passwordInput.style.padding = '10px';
    passwordInput.style.width = '250px';
    passwordInput.style.border = '1px solid #ccc';
    passwordInput.style.borderRadius = '4px';

    const loginButton = document.createElement('button');
    loginButton.type = 'submit';
    loginButton.textContent = 'Մուտք';
    loginButton.style.marginTop = '10px';
    loginButton.style.padding = '10px 20px';
    loginButton.style.backgroundColor = '#4CAF50';
    loginButton.style.color = '#fff';
    loginButton.style.border = 'none';
    loginButton.style.borderRadius = '4px';
    loginButton.style.cursor = 'pointer';

    loginButton.addEventListener('mouseover', () => {
        loginButton.style.backgroundColor = '#45a049';
    });
    loginButton.addEventListener('mouseout', () => {
        loginButton.style.backgroundColor = '#4CAF50';
    });

    const message = document.createElement('p');
    message.style.color = 'red';
    message.style.display = 'none';
    message.style.marginTop = '10px';

    loginForm.appendChild(usernameInput);
    loginForm.appendChild(passwordInput);
    loginForm.appendChild(loginButton);
    loginContainer.appendChild(title);
    loginContainer.appendChild(loginForm);
    loginContainer.appendChild(message);

    document.body.appendChild(loginContainer);

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        const isValidUser = users.some(user => user.username === username && user.password === password);

        if (isValidUser) {
            localStorage.setItem('isLoggedIn', 'true');
            document.body.innerHTML = ''; // Clear login form
            document.body.appendChild(createButtonGrid(buttonLinks));
        } else {
            message.textContent = 'Invalid username or password';
            message.style.display = 'block';
        }
    });
}

// Function to create buttons dynamically
function createButtonGrid(links) {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(3, 1fr)';
    container.style.gap = '10px';
    container.style.padding = '20px';

    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Դուրս գալ';
    logoutButton.style.position = 'absolute';
    logoutButton.style.bottom = '15px';
    logoutButton.style.right = '15px';
    logoutButton.style.padding = '15px';
    logoutButton.style.cursor = 'pointer';
    logoutButton.style.backgroundColor = '#f44336';
    logoutButton.style.color = '#fff';
    logoutButton.style.border = 'none';
    logoutButton.style.borderRadius = '4px';

    logoutButton.addEventListener('mouseover', () => {
        logoutButton.style.backgroundColor = '#d32f2f';
    });
    logoutButton.addEventListener('mouseout', () => {
        logoutButton.style.backgroundColor = '#f44336';
    });

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        document.body.innerHTML = ''; // Clear current content
        displayLoginForm();
    });

    document.body.appendChild(logoutButton);

    links.forEach(({ name, url }) => {
        const button = document.createElement('button');
        button.textContent = name;
        button.style.padding = '13px';
        button.style.cursor = 'pointer';
        button.style.backgroundColor = '#0364b9';
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.borderRadius = '4px'; 

        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#0046b3';
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#0364b9';
        }); 

        button.addEventListener('click', () => {
            window.open(url, '_blank');
        });

        container.appendChild(button);
    });

    return container;
}

// Check login status on page load
if (localStorage.getItem('isLoggedIn') === 'true') {
    document.body.appendChild(createButtonGrid(buttonLinks));
} else {
    displayLoginForm();
}
