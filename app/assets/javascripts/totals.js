function updateData(data) {
    $('#data').html(data)
}

function startRefresh() {
    setTimeout(startRefresh,1000);
    $.getJSON('/totals/total.json',updateData)
}

startRefresh()
