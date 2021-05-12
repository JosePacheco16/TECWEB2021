/*Controlador*/
function actionCreate(){

    var tabla               = $('#example1').DataTable();
    var eje_tematico_create = document.getElementById("eje_tematico_create").value;
    var modalidad_create = document.getElementById("modalidad_create").value;
    var descripcion_create = document.getElementById("descripcion_create").value;
    var factor_create = document.getElementById("factor_create").value;
    var ejemplos_create = document.getElementById("ejemplos_create").value;
    var botones         =  '<a class="btn btn-info btn-sm" data-toggle="modal" data-target="#modal-lg-actualizar" href="#">';
    botones =botones+'<i class="fas fa-pencil-alt">';
    botones =botones+'</i>';
    botones =botones+'Actualizar';
    botones =botones+'</a>';
    botones =botones+'<a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-default" href="#">';
    botones =botones+'<i class="fas fa-trash">';
    botones =botones+'</i>';
    botones =botones+'Eliminar';
    botones =botones+'</a>';
    

    tabla.row.add( [
        eje_tematico_create,
        modalidad_create,
        descripcion_create,
        botones
    ] ).draw(false);
    
}

function actionRead(){
    alert("Leer registro (R ead)")

}

function actionUpdate(){
    alert("Actualizar registro (U pdate)")

}

function actionDelete(){
    alert("Eliminar registro (D elete)")

}