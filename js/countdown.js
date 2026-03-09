function renderTiles(id, value, digits) {
    var el = document.getElementById(id);
    if (!el) return;
    var str = String(value).padStart(digits, '0');
    el.innerHTML = str.split('').map(function (d) {
        return '<span class="cd-tile">' + d + '</span>';
    }).join('');
}

function updateCountdown() {
    // Ceremony: Saturday May 30, 2026 at 4:00 PM Pacific Time
    var wedding = new Date('2026-05-30T16:00:00-07:00');
    var now = new Date();
    var diff = wedding - now;

    if (diff <= 0) {
        var el = document.getElementById('countdown');
        if (el) el.innerHTML = 'TODAY IS THE DAY!!!';
        return;
    }

    var days  = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var secs  = Math.floor((diff % (1000 * 60)) / 1000);

    renderTiles('cd-days',  days,  3);
    renderTiles('cd-hours', hours, 2);
    renderTiles('cd-mins',  mins,  2);
    renderTiles('cd-secs',  secs,  2);
}

updateCountdown();
setInterval(updateCountdown, 1000);
