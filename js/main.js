let discord = document.querySelector(".discord-foutucode");
let html = document.querySelector(".html-li");
let css = document.querySelector(".css-li");
let javascript = document.querySelector(".js-li");
let php = document.querySelector(".php-li");

// Animation texte Foutu Code

discord.addEventListener("mouseover", ()=>{
    discord.innerHTML = "Toi aussi, rejoins la communauté!";
});

discord.addEventListener("mouseleave", ()=>{
    discord.innerHTML = "Foutu Code";
});

// Animation texte HTML

html.addEventListener("mouseover", ()=>{
    html.innerHTML = "Ça, c'est simple.";
});

html.addEventListener("mouseleave", ()=>{
    html.innerHTML = "HTML";
});

// Animation texte CSS

css.addEventListener("mouseover", ()=>{
    css.innerHTML = "Là par contre, je vais galérer. Vive le flexbox...";
});

css.addEventListener("mouseleave", ()=>{
    css.innerHTML = "CSS";
});

// Animation texte JavaScript

javascript.addEventListener("mouseover", ()=>{
    javascript.innerHTML = "Pour le moment, c'est du chinois, mais ça viendra un jour!";
});

javascript.addEventListener("mouseleave", ()=>{
    javascript.innerHTML = "JavaScript";
});

// Animation texte PHP

php.addEventListener("mouseover", ()=>{
    php.innerHTML = "N'en parlons pas.";
});

php.addEventListener("mouseleave", ()=>{
    php.innerHTML = "PHP";
});