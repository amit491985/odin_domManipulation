//1. a <p> with red text that says “Hey I’m red!”
const para = document.createElement("p");
const div = document.querySelector('.super');

para.textContent = "Hey I'm red!";
para.style.color = 'red';
div.appendChild(para);


//2. an <h3> with blue text that says “I’m a blue h3!”
const header3 = document.createElement('h3');
header3.textContent = "I'm a blue h3";
header3.style.color = 'blue';

div.appendChild(header3);


//3. a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
const div2 = document.createElement("div");
div2.style.border = 'solid';
div2.style.borderColor = 'black';
div2.style.borderWidth = '2px';
div2.style.backgroundColor = 'pink';

const header1 = document.createElement('h1');
header1.textContent = "I'm in a div";
header1.style.margin = '0';

div.appendChild(div2);

div2.appendChild(header1);

//4. a <p> that says “ME TOO!”
const para2 = document.createElement('p');

para2.textContent = 'ME TOO!';
div2.appendChild(para2);

