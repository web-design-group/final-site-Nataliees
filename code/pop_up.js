const signupButton = document.getElementById('signupButton');
const signupModal = document.getElementById('signupModal');

const sendRequestBtn = document.getElementById('sendRequestBtn');
const closeConfirmationBtn = document.getElementById('closeConfirmationBtn');
const confirmationModal = document.getElementById('confirmationModal');

const closeModalBtn = document.getElementById('closeModalBtn');

signupButton.addEventListener('click', () => {
    signupModal.style.display = 'block';
    setTimeout(() => signupModal.classList.add('show'), 10);
});

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        signupModal.classList.remove('show');
        setTimeout(() => signupModal.style.display = 'none', 300);
    });
}

sendRequestBtn.addEventListener('click', () => {
    signupModal.classList.remove('show');
    setTimeout(() => {
        signupModal.style.display = 'none';
        confirmationModal.style.display = 'block';
        setTimeout(() => confirmationModal.classList.add('show'), 10);
    }, 300);
});

closeConfirmationBtn.addEventListener('click', () => {
    confirmationModal.classList.remove('show');
    setTimeout(() => confirmationModal.style.display = 'none', 300);
});

document.addEventListener('click', (event) => {
    if (event.target === signupModal) {
        signupModal.classList.remove('show');
        setTimeout(() => signupModal.style.display = 'none', 300);
    }
    if (event.target === confirmationModal) {
        confirmationModal.classList.remove('show');
        setTimeout(() => confirmationModal.style.display = 'none', 300);
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (signupModal.classList.contains('show')) {
            signupModal.classList.remove('show');
            setTimeout(() => signupModal.style.display = 'none', 300);
        }
        if (confirmationModal.classList.contains('show')) {
            confirmationModal.classList.remove('show');
            setTimeout(() => confirmationModal.style.display = 'none', 300);
        }
    }
});