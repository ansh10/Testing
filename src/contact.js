export default function createContact() {
    const content = document.getElementById('content');
    const contactHeading = document.createElement('h1');
    contactHeading.textContent = 'Contact Us';
    const contactDetails = document.createElement('p');
    contactDetails.textContent = 'Phone: 123-456-7890';
    content.appendChild(contactHeading);
    content.appendChild(contactDetails);
}