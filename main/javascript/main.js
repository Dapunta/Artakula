document.getElementById('add-amount').addEventListener('input', function(event) {
    let value = event.target.value;
    if (value <= 0) {
        event.target.value = '';
    }
});

function profileBoxToggle() {
    const profile_box = document.getElementById('profile-section');
    profile_box.classList.toggle('inactive');
}

function logout() {
    deleteCookie('key');
    window.location.href = window.location.origin + '/login/';
}

function addBoxToggle() {
    const profile_box = document.getElementById('add-box');
    profile_box.classList.toggle('inactive');
    document.getElementById('add-amount').value = '';
    document.getElementById('add-note').value = '';
    document.getElementById('add-response').innerText = '';
}

function historyBoxToggle() {
    document.getElementById('profile-section').classList.add('inactive');
    document.getElementById('add-box').classList.add('inactive');
    const profile_box = document.getElementById('history-section');
    profile_box.classList.toggle('inactive');
}