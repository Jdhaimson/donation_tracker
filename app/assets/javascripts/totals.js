function updateData(data) {
    var total = data
    var display = "$" + total
    thermometer(1000,total,true)
    $('.dataDisplay').html(display)
}

function startRefresh() {
    setTimeout(startRefresh,1000);
    $.getJSON('/totals/total.json',updateData)
}

