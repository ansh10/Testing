import createHome from './home';
import createMenu from './menu';
import createContact from './contact';


document.getElementById("home-btn").addEventListener("click", function () {
    clearContent();
    createHome;
});

document.getElementById("menu-btn").addEventListener("click", function () {
    clearContent();
    createHome();
});

document.getElementById('contact-btn').addEventListener('click', () => {
    clearContent();
    createContact();
});

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

createHome();