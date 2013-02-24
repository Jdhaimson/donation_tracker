function updateData(data) {
    var total = data
    var display = "<h1>Total Amount of Money Raised: $" + total + "</h1>"
    $('#data').html(display)
}

function startRefresh() {
    setTimeout(startRefresh,1000);
    $.getJSON('/totals/total.json',updateData)
}

