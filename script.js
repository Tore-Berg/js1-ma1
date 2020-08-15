//Question 1.


let cat = {
    complain: function() {
        console.log("Meow!");
    }
}

cat.complain();

//Question 2 Need more work

const heading = document.querySelector("h3");

//Question 3.

heading.style.fontSize = "2em";

//Question 4.

heading.classList.add = "subheading";

//Question 5.

const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

//Question 6.

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "New paragraph";
resultsContainer.style.backgroundColor = "yellow";

//Question 7.

const cats = [
    {
        name: "Blob",
        age: 10,
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21,
    },
];

function catName(list) {
    for (i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

catName(cats);


//Question 8.


const container = document.querySelector("cat-container");

console.log(container);

let html = "";

function createCats(cats) {
    for (let i = 0; i < cats.length; i++) {
        
        let age = "Unknown age";

        if (cats[i].age) {
            age = cats[i].age;
        }
        
        html += `<div>
                    <h5>${cats[i].name}</h5>
                    <p>${age}</p>        
                </div>
                `;

        console.log(html);

    };
}

createCats(cats);
container.innerHTML = html;