if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    document.body.innerHTML = "This website is not available on mobile devices.";
}
  
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));