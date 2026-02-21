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

    var d = document.getElementById('cd-days');
    var h = document.getElementById('cd-hours');
    var m = document.getElementById('cd-mins');
    var s = document.getElementById('cd-secs');

    if (d) d.textContent = days;
    if (h) h.textContent = hours;
    if (m) m.textContent = mins;
    if (s) s.textContent = secs;
}

updateCountdown();
setInterval(updateCountdown, 1000);
