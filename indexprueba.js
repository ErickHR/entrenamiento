// if ('content' in document.createElement('template')) {
//     var t = document.querySelector('#productrow'),

//     td = t.content.querySelectorAll("td");
//     td[0].textContent = "1235646565";
//     td[1].textContent = "Stuff";
//     // Clone the new row and insert it into the table
//     var tb = document.querySelector("tbody");
//     var clone = document.importNode(t.content, true);
//     tb.appendChild(clone);
    
//     // Create a new row
//     td[0].textContent = "0384928528";
//     td[1].textContent = "Acme Kidney Beans";
  
//     // Clone the new row and insert it into the table
//     var clone2 = document.importNode(t.content, true);
//     tb.appendChild(clone2);
  
//   } else {
    
//   }

// elem.onclick = function() {
//     elem.attachShadow({mode: 'open'});

//     elem.shadowRoot.append(tmpl.content.cloneNode(true)); // (*)

//     elem.shadowRoot.getElementById('message').innerHTML = "Hello from the shadows!";
//   };
let i = 0
  boton.onclick = function(){
    let temp = document.querySelector('#temp')

    let td = temp.content.querySelectorAll('td')
    td[0].textContent = ++i
    td[1].textContent = "Erick"

    let body = document.querySelector('tbody')

    body.appendChild( document.importNode(temp.content, true))

  }
