const copyButton = document.getElementById('copy'); 
var input = document.getElementById('email');

copyButton?.addEventListener("click", function(event) {
    event.preventDefault();
    input?.select();
    document.execCommand("copy");
});