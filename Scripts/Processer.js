function Details(id) {
    $("#image").attr("src", 'https://ipt-ti2-iptgram.azurewebsites.net/api/posts/' + id + '/image');
    $.getJSON('https://ipt-ti2-iptgram.azurewebsites.net/api/posts/' + id, function (data) {
        var myDate = new Date(data.postedAt);
        $('#user').text(`${data.user.userName} &nbsp&nbsp&nbsp ${myDate.toLocaleString()}`);
        $('#Legenda').text(data.caption);
        $('#likes').text(`${data.likes}`);
        //$('#comments').html(`${data.likes}`);
    });
    $.getJSON('https://ipt-ti2-iptgram.azurewebsites.net/api/posts/' + id + '/comments', function (data) {
        data.forEach(createDetails);

    });
}
function createDetails(data, index) {
    var myDate = new Date(data.postedAt);
    $('#comments').append(`<div class="card border-dark mb-3" style="max-width: 18rem;">
                        <div class="card-header">${data.user.name}</div>
                        <div class="card-body text-dark">
                            <p class="card-text">${myDate.toLocaleString()}</p>
                            <h5 class="card-title">${data.text}</h5>
                        </div>
                    </div>`);
}

function Default() {
    $('#Data_Show').html(template = $("#Default").clone());
    $.getJSON('https://ipt-ti2-iptgram.azurewebsites.net/api/posts/', function (data) {
        data.forEach(createDefault);
    });
}
function createDefault(data, index) {
    var myDate = new Date(data.postedAt);
    $('#cards').append(`<!--card -->
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="https://ipt-ti2-iptgram.azurewebsites.net/api/posts/ ${data.id} /image" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${data.user.userName}</h5>
                        <p class="card-text">${myDate.toLocaleString()}&nbsp;&nbsp;&nbsp; 👍 ${data.likes} </p>
                        <p class="card-text">💬 ${data.comments}</p>
                        <a href="/Home/Details/${data.id}" class="stretched-link"></a>
                        <!--<a href="/Home/Details/${data.id}" class="btn btn-primary">Go somewhere</a>-->
                            </div>
                        </div>
                <br />`);
}