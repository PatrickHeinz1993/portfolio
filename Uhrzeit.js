function aktualisiereZeit() {
    const jetzt = new Date();
    const datetimeWert = jetzt.toISOString().slice(0, 16);
    const options = {
    weekday: 'long', year: 'numeric', month: 'long',
    day: 'numeric', hour: '2-digit', minute: '2-digit',
    second: '2-digit', hour12: false
    };
    document.getElementById("zeitinfo").dateTime = datetimeWert;
    document.getElementById("zeitinfo").textContent = jetzt.toLocaleString('de-DE', options);
}

aktualisiereZeit();
setInterval(aktualisiereZeit, 1000);