let btnLogout = document.querySelector('#btn-logout');

btnLogout.onclick = (e) => {
    e.preventDefault();

    sessionStorage.clear();

    window.location.href = '../index.html'
}
