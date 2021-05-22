function showPassword() {
    const btn = document.querySelector('.password-btn');
    const input = document.querySelector('.password-input');

    btn.addEventListener('click', () => {
        if (input.getAttribute('type') === 'password') {
            input.setAttribute('type', 'text');
        } else {
            input.setAttribute('type', 'password');
        }
    })
}
showPassword()