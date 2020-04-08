$(document).ready(() => {

    var estado = $('.estado');
    var mi_div = $('.datos');
    var loading = $('.loading');
    var div_form = $('.new');

    /*---------------------------------------------------------------------------------*/
    $('#btn-get').click(() => {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            type: 'GET',
            dataType: 'json',
            beforeSend: () => {
                loading.show();
            },
            success: (data) => {
                data.forEach((element, index) => {
                    mi_div.append('<div class="card border-danger  mt-4 mb-4"><div class="card-body"><h2>' + element.id + ' ' + element.title + '</h2>' + '<p>' + element.body + '</p><br></div></div>');
                });
                loading.hide();
            },
            error: (jqXhr, textStatus, errorMessage) => {
                estado.append('<div class="alert alert-success" role="alert">' + 'ERROR' + ' ' + errorMessage + '</div>');
                loading.hide();
            }
        });
    });
    /*---------------------------------------------------------------------------------*/
    $('#btn-get2').click(() => {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            type: 'GET',
            dataType: 'json',
            beforeSend: () => {
                loading.show();
            },
            success: (data) => {
                var valor = data;
                mi_div.append('<div class="card border-danger  mt-4 mb-4"><div class="card-body"><h2>' + valor.id + ' ' + valor.title + '</h2>' + '<p>' + valor.body + '</p><br></div></div>');
                loading.css("display", "none");
            },
            error: (jqXhr, textStatus, errorMessage) => {
                estado.append('<div class="alert alert-success" role="alert">' + 'ERROR' + ' ' + errorMessage + '</div>');
                loading.hide();
            }
        });
    });
    /*---------------------------------------------------------------------------------*/
    $('#btn-post').click(() => {
        div_form.show();
    });
    /*---------------------------------------------------------------------------------*/
    $('#formularios').submit(e => {
        e.preventDefault();
        var datos = {
            title: $('input[name="titulo"]').val(),
            body: $('textarea[name="body"]').val(),
        };

        $.ajax({
            url: $('#formularios').attr('action'),
            type: 'POST',
            dataType: 'json',
            data: datos,
            beforeSend: () => {
                loading.show();
            },
            success: (data) => {
                estado.append('<div class="alert alert-success" role="alert">' + 'LOS DATOS SE HAN ENVIADO CORRECTAMENTE' + ' ' + status + '</div>');
                div_form.hide();
                loading.hide();
                console.log(data);
            },
            error: (jqXhr, textStatus, errorMessage) => {
                estado.append('<div class="alert alert-success" role="alert">' + 'ERROR' + ' ' + errorMessage + '</div>');
                loading.hide();
            }
        });

        return false;
    });
    /*---------------------------------------------------------------------------------*/
    $('#btn-patch').click(() => {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            type: 'PATCH',
            data: {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "Probando metdo PATCH"
            },
            beforeSend: () => {
                loading.show();
            },
            success: (data, status, xhr) => {
                console.log(data);
                estado.append('<div class="alert alert-success" role="alert">' + 'METODO PATCH' + ' ' + status + '</div>');
                loading.hide();
            },
            error: (jqXhr, textStatus, errorMessage) => {
                estado.append('Error' + errorMessage);
            }
        });
    });
    /*---------------------------------------------------------------------------------*/
    $('#btn-put').click(() => {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            type: 'PUT',
            data: {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "Probando Metodo PUT"
            },
            beforeSend: () => {
                loading.show();
            },
            success: (data, status, xhr) => {
                console.log(data);
                estado.append('<div class="alert alert-success" role="alert">' + 'METODO PUT' + ' ' + status + '</div>');
                loading.hide();
            },
            error: (jqXhr, textStatus, errorMessage) => {
                estado.append('Error' + errorMessage);
            }
        });
    });
    /*---------------------------------------------------------------------------------*/
    $('#btn-delete').click(() => {

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            type: 'DELETE',
            data: {
                userId: 1
            },
            beforeSend: () => {
                loading.show();
            },
            success: (data, status, xhr) => {
                console.log(data);
                estado.append('<div class="alert alert-success" role="alert">' + 'METODO DELETE' + ' ' + status + '</div>');
                loading.hide();
            },
            error: (jqXhr, textStatus, errorMessage) => {
                estado.append('<div class="alert alert-success" role="alert">' + 'ERROR' + ' ' + status + '</div>');
                loading.hide();
            }
        });
    });
    /*---------------------------------------------------------------------------------*/
});