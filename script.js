$(document).ready(() => {
    let parser = window.PARSJASS
    $("#ejecutar").on('click', () => {
        texto = $("#content").val();
        try {
            parser.parse(texto);
            swal({
                title: "correcto",
                icon: "success",
                button: "ok",
            });
        } catch (error) {
            swal({
                title: "incorrecto",
                icon: "error",
                button: "ok",
            });
        }
    })
})