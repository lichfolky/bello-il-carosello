// @ts-check

const items = [
    {
        image: "113",
        title: "Marvel's Spiderman Miles Morale",
        text:
            "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."
    },
    {
        image: "244",
        title: "Ratchet & Clank: Rift Apart",
        text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality."
    },
    {
        image: "322",
        title: "Fortnite",
        text:
            "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
    },
    {
        image: "411",
        title: "Stray",
        text:
            "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city"
    },
    {
        image: "234",
        title: "Marvel's Avengers",
        text:
            "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay."
    }
];

const itemsEl = [];

const carosello = document.querySelector(".carosello");
if (carosello !== null) {

    const nextEl = document.querySelector("#next");
    const prevEl = document.querySelector("#prev");
    const num = document.querySelector("#num");
    const imgTitleEl = document.querySelector(".title");

    for (const item of items) {
        let photoEl = document.createElement("img");
        var timestamp = new Date().getTime();
        photoEl.src = `https://picsum.photos/id/${item.image}/300/400?t=${timestamp}`;
        photoEl.alt = item.text;
        photoEl.addEventListener("click", next);
        itemsEl.push(photoEl);
        carosello.append(photoEl);
    }

    setCurrent(0);
    let interval;
    start();

    let indexActive = 0;
    itemsEl[indexActive].classList.add("active");

    if (nextEl) {
        nextEl.addEventListener(`click`, () => {

            stop();
            next();
        });

    }
    if (prevEl) {
        prevEl.addEventListener(`click`, () => {
            stop();
            prev();
        });
    }

    function next() {
        itemsEl[indexActive].classList.remove("active");
        if (indexActive < itemsEl.length - 1) {
            indexActive++;
        } else {
            indexActive = 0;
        }
        itemsEl[indexActive].classList.add("active");
        setCurrent(indexActive);
    }

    function prev() {
        itemsEl[indexActive].classList.remove("active");
        if (indexActive > 0) {
            indexActive--;
        } else {
            indexActive = itemsEl.length - 1;
        }
        itemsEl[indexActive].classList.add("active");
        setCurrent(indexActive);
    }

    function setCurrent(active) {
        // @ts-ignore
        num.innerText = `${active + 1} / ${itemsEl.length}`;
        // @ts-ignore
        imgTitleEl.innerText = items[active].title;
    }

    function start() {
        // @ts-ignore
        imgTitleEl.style.color = "green";
        interval = setInterval(next, 3000);
    }

    function stop() {
        // @ts-ignore
        imgTitleEl.style.color = "red";
        clearInterval(interval);
    }

}