function displayCurrentDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    dateTimeElement.innerText = now.toLocaleString('en-US', options);
}
document.addEventListener('DOMContentLoaded', (event) => {
    displayCurrentDateTime();
})
function greet() {
    inputName = document.getElementById('name').value;
    inputFeeling = document.getElementById('feeling').value;
    greetingElement = document.getElementById('greeting');
    greetingElement.innerText = "Welcome, " + inputName + ". I'm intrigued that you're feeling " + inputFeeling + " today!";
}
function showPolygon() {
    favNumElement = document.getElementById('fnumber');
    let number = Math.round(Math.abs(favNumElement.value));
    let polygon;
    switch (number) {
        case 2: polygon = "Digon"; break;
        case 3: polygon = "Triangle"; break;
        case 4: polygon = "Quadrilateral"; break;
        case 5: polygon = "Pentagon"; break;
        case 6: polygon = "Hexagon"; break;
        case 7: polygon = "Heptagon"; break;
        case 8: polygon = "Octagon"; break;
        case 9: polygon = "Nonagon"; break;
        case 10: polygon = "Decagon"; break;
        default: polygon = "Multi-sided polygon";
    }
    alert(polygon);
}
function whoYaGonnaCall() {
    alert("GhostBusters!");
}
function winningCatchphrase() {
    alert("YO MAMA");
}
function whenYaDontKnow() {
    alert("SUPERCALIFRAGILISTICEXPIALIDOCIOUS");
}
function myAddress() {
    alert("SIKE! lol");
}