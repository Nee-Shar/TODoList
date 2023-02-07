/* const body=document.body


const div=document.createElement("div");





const strong=document.createElement("strong");
strong.innerText="yo";
div.append(strong);
body.append(div); */

const div1=document.querySelector("#div1");
div1.remove();
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });
