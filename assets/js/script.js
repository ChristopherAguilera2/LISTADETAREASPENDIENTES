document.addEventListener('DOMContentLoaded', () => {
    const tareas = [
        { tarea: "Pintar la fachada de la casa" },
        { tarea: "Comprar comida para el perro" },
        { tarea: "Pagar la tarjeta de crédito" }
    ];

    function mymain(){
        try {
            primero();
            document.querySelector(".btn-success").addEventListener("click", mostrar);
            document.querySelector(".btn-primary").addEventListener("click", agregar);
            document.getElementById("cuerpo-tabla").addEventListener("click", function(event) {
            if (event.target && event.target.classList.contains("btn-danger")) {
                    eliminar(event.target);
                }
            });
        } catch (error) {
            console.log(error.name, error.message);
        }
    }

    function mostrar(){
        try {
            let element = document.getElementById("formulario");
            let display = element.style.display;
            if(display === "block"){
                document.getElementById("formulario").style.display = 'none';
                document.getElementById("cuerpo-tabla").style.display = 'none';
            }
            else{
                document.getElementById("formulario").style.display = 'block';
                document.getElementById("cuerpo-tabla").style.display = '';
            }
        } catch (error) {
            console.log(error.name, error.message);
        }
    }

    function agregar(){
        try {
            const nuevaTarea = document.getElementById("nuevaTarea").value;
            if (!nuevaTarea.trim()) return; // No agregar tareas vacías
            const table = document.getElementById("cuerpo-tabla");
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.textContent = nuevaTarea;
            const btnEliminar = document.createElement("BUTTON");
            btnEliminar.textContent = "Finalizar";
            btnEliminar.classList.add("btn", "btn-danger");
            cell2.appendChild(btnEliminar);
            document.getElementById("nuevaTarea").value = '';
        } catch (error) {
            console.log(error.name, error.message);
        }
    }

    function eliminar(button){
        try {
            const row = button.closest('tr');
            row.remove();
        } catch (error) {
            console.log(error.name, error.message);
        }
    }

    function primero(){
        try {
            document.getElementById("cuerpo-tabla").style.display = 'none';
            const table = document.getElementById("cuerpo-tabla");
            tareas.forEach((tarea, index) => {
                const row = table.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                cell1.textContent = tarea.tarea;
                const btnEliminar = document.createElement("BUTTON");
                btnEliminar.textContent = "Finalizar";
                btnEliminar.classList.add("btn", "btn-danger");
                cell2.appendChild(btnEliminar);
            });
        } catch (error) {
            console.log(error.name, error.message);
        }
    }

    mymain();
});
