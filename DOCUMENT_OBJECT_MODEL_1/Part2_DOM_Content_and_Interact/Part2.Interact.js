// Guarda todo o conteudo do primeiro paragraph na variavel p
let p = document.querySelector("p");

// .TEXTCONTENT
// p.textContent = "NEW TEXT"   (Uma forma de mudar o conteudo escrito em <p></p>)
// p.textContent = "<b>I'm Bold</b>"    (A saída vai ser exatamente <b>I'm Bold</b> por escrito)

// .INNERHTML
// p.innerHTML = "<b>I'm Bold</b>"   (Uma forma de mudar o conteudo aplicando comandos de HTML)
// p.innerHTML = "<b>I'm Bold</b>"   (A saída vai ser exatamente "I'm Bold" em negrito)

// Guarda todo o conteudo do primeiro id="special" na variavel special
let special = document.querySelector("#special");

// Guarda todo o conteudo do primeiro anchor dentro do primeiro id="special" na variavel specialA
let specialA = special.querySelector("a");

// Obtem-se apenas o atributo "href" dentro da variável specialA
specialA.getAttribute("href");

// Muda-se o conteudo do atributo especificado previamente
specialA.setAttribute("href", "https://www.amazon.com.br/");

