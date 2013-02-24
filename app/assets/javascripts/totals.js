$.mynamespace = {
    total : 0
}

function updateData(data) {
    if(data != $.mynamespace.total) {
        $.mynamespace.total = data
        var display = "$" + data
        thermometer(1000,data,true)
        $('.dataDisplay').html(display)
    }
}

function startRefresh() {
    setTimeout(startRefresh,1000);
    $.getJSON('/totals/total.json',updateData)
}

