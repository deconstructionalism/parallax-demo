// // Scroll to specific values
// // scrollTo is the same
// window.scroll({
//   top: 2500, 
//   left: 0, 
//   behavior: 'smooth' 
// });

// // Scroll certain amounts from current position 
// window.scrollBy({ 
//   top: 0, // could be negative value
//   left: 0, 
//   behavior: 'smooth' 
// });

const scrollTo = (e) => {
    const {
        target
    } = e.target.dataset
    document.getElementById(target).scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", _ => {
    document.querySelectorAll('nav>ul>li>a').forEach(el => {
        el.addEventListener('click', scrollTo)
    })
});