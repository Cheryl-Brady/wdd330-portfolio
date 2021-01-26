// focus event listener
const input = form.elements.searchInput;
input.addEventListener('focus', () => alert('focused'), false);

//blur event listener
input.addEventListener('blur', () => alert('blurred'), false);

//change event listener
input.addEventListener('change', () => alert('changed'), false);

//submitting a form
const form = document.forms['search'];
form.addEventListener ('submit', search, false);
function search() {
    alert(`You searched for: ${input.value}`);
    event.preventDefault();
}

//Text inside the input text box
input.value = 'Search Here';

//input text disappears when the user clicks inside it
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);
input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);