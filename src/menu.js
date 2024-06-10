 export default function createMenu() {
    const content = document.getElementById('content');
    const menuHeading = document.createElement('h1');
    menuHeading.textContent = 'Menu';
    const menuItem = document.createElement('p');
    menuItem.textContent = 'Delicious food items...';
    content.appendChild(menuHeading);
    content.appendChild(menuItem);
}