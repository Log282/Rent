function calculateBill() {
    var connectionType = document.getElementById("connectionType").value;
    var previousReading = parseInt(document.getElementById("previousReading").value);
    var currentReading = parseInt(document.getElementById("currentReading").value);

    var e,eb, total;

    if (connectionType == 1 || connectionType == 2) {
        e = (currentReading - previousReading);
        eb = (currentReading - previousReading) * 7;
        total = (connectionType == 1) ? eb + 7300 : eb + 7800;
    } else if (connectionType == 4 || connectionType == 5) {
        e = (currentReading - previousReading);
        eb = (currentReading - previousReading) * 7;
        total = (connectionType == 4) ? eb + 4200 : eb + 4800;
    } else if (connectionType == 3) {
        e = (currentReading - previousReading);
        eb = (currentReading - previousReading) * 6;
        total = eb + 8700;
    }

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<p>Unit: " + e + "<p>EB: " + eb + "</p><p>Total: " + total + "</p>";
}
