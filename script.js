let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted!';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> An error occurred!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, please try again!';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 5000);

if (msg.includes('An error occurred')) {
    toast.classList.add('error');
} else if (msg.includes('Invalid input')) {
    toast.classList.add('invalid');
}

}
