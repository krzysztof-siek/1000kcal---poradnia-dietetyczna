// Nasłuchiwanie na scrolla i dodanie klasy "sticky" do nav-menu
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const nav = document.querySelector('.nav-menu')
    if (scrollY >= 400) {
        nav.classList.add('sticky')
    } else {
        nav.classList.remove("sticky")
    }


})

const navButton = document.querySelector(".nav-button");


changeNavButton = () => {
    // tutaj zamiast łapać każdą linię po kolei, później można złapać wszystkie na raz i zrobić pętle - muszę to zmienić później
    // Dodawanie klasy "change" przy kliknięciu co powoduje zmianę pozycji linii w burgerze
    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');
    const line3 = document.querySelector('.line3');
    line1.classList.toggle('change');
    line2.classList.toggle('change');
    line3.classList.toggle('change');

}
navButton.addEventListener('click', changeNavButton)


window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const card1 = document.querySelector('.card-1');
    const card2 = document.querySelector('.card-2');
    const card3 = document.querySelector('.card-3');
    if (scrollY >= 1500) {
        card1.classList.add('moveFromLeft');
        card2.classList.add('opacity');
        card3.classList.add('moveFromRight');

    } else {
        card1.classList.remove('moveFromLeft');
        card2.classList.remove('opacity');
        card3.classList.remove('moveFromRight');
    }

})

