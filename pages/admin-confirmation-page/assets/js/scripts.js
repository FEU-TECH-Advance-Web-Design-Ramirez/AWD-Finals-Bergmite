function handleAction(event, action) {
    const item = event.target.closest('.item');
    if (item) {
        alert(`${action} action performed on: ${item.querySelector('p').innerText}`);
        item.remove();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".approve").forEach(button => {
        button.addEventListener("click", event => handleAction(event, "Approved"));
    });
    
    document.querySelectorAll(".reject").forEach(button => {
        button.addEventListener("click", event => handleAction(event, "Rejected"));
    });
});
