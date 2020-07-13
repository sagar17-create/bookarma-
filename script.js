const grab = document.querySelector('#book-list ul');






//delete books
let li = document.querySelectorAll('#book-list li .delete');
console.log(li);
for (i of li) {
    document.addEventListener('click', function(e) {
        if (e.target.className == 'delete') {

            const p = e.target.parentElement;
            p.parentElement.removeChild(p);


        }



    })
};



//Adding books


function addbook(){

   


    
    const data=document.getElementById("addbookvalue").value;
    console.log(data)
    const newli = document.createElement('li');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement("span");


    //appending to dom
    newli.appendChild(span1);
    newli.appendChild(span3);
    newli.appendChild(span2);

    grab.appendChild(newli);


    span1.textContent = data;

    span3.textContent = "\u2713";
    span2.textContent = "Delete";

    span1.className += "name";
    span3.className += "tick"
    span2.className += "delete";


    console.log(grab);
}


//for hide books

let hides = document.querySelector('#hide');




hides.addEventListener('change', function(e) {
    if (hides.checked) {
        grab.style.display = "none";


    } else {
        grab.style.display = "initial";
    }

});

//Search Books ...

const search = document.querySelector("#search-books input");
search.addEventListener('keyup', function(e) {
    const search = e.target.value.toLowerCase();
    const books = grab.getElementsByTagName('li');
    const x = Array.from(books);
    for (i of x) {
        const term = i.firstElementChild.textContent;
        console.log(term);
        if (term.toLowerCase == search) {
            grab.display = "none";
        } else {
            grab.display = "block";
        }


    }
});

//functionality for tick 

// const tickgrab = document.querySelectorAll("#book-list li .tick");
const tickgrab = grab.querySelectorAll("li .tick");
console.log("these are the all tick", tickgrab);



for (loop of Array.from(tickgrab)) {
    console.log("All array ", loop);
    const cliker = loop.addEventListener('click', function(e) {
        if (e.target.className == "tick") {
            const y = e.target.parentElement;
            const chi = y.querySelector(".name");
            chi.style.textDecoration = "line-through";




        }

    })

}