const button = document.getElementById("myButton");
const div = document.getElementById("myDiv");

let state = false;

button.addEventListener("click", function () {
    state = !state;
    if (state) {
        div.classList.remove("absolute", "top-0", "h-screen", "left-[-100%]", "ease-in", "duration-500");
        div.classList.add("overflow-y-hidden", "md:hidden", "ease-in", "duration-300", "absolute", "text-light", "left-0", "top-0", "h-screen", "opacity-80", "bg-dark", "px-4", "py-20", "flex", "flex-col");
    } else {
        div.classList.remove("overflow-y-hidden", "md:hidden", "ease-in", "duration-300", "absolute", "text-light", "left-0", "top-0", "h-screen", "opacity-80", "bg-dark", "px-4", "py-20", "flex", "flex-col");
        div.classList.add("absolute", "top-0", "h-screen", "left-[-100%]", "ease-in", "duration-500");
    }
});