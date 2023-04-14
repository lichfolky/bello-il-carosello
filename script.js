const items = [
    {
        image: "133",
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
const prev = document.querySelector("#prev");
const num = document.querySelector("#num");
const next = document.querySelector("#next");

const carosello = document.querySelector(".carosello");
for (const item of items) {
    let photoEl = document.createElement("img");
    var timestamp = new Date().getTime();
    photoEl.src = `https://picsum.photos/id/${item.image}/300/400?t=${timestamp}`;
    itemsEl.push(photoEl);
    carosello.append(photoEl);
    num.innerText = `1 / ${itemsEl.length}`;
}

let indexActive = 0;
itemsEl[indexActive].classList.add("active");

next.addEventListener(`click`, function () {
    itemsEl[indexActive].classList.remove("active");
    if (indexActive < itemsEl.length - 1) {
        indexActive++;
    }
    itemsEl[indexActive].classList.add("active");
    num.innerText = `${indexActive + 1} / ${itemsEl.length}`;

});

prev.addEventListener(`click`, function () {
    itemsEl[indexActive].classList.remove("active");
    if (indexActive > 0) {
        indexActive--;
    }
    itemsEl[indexActive].classList.add("active");
    num.innerText = `${indexActive + 1} / ${itemsEl.length}`;
});
