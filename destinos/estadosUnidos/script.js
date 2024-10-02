const boton1 = document.getElementById('boton1');
        const boton2 = document.getElementById('boton2');
        const campoTexto = document.getElementById('destino');

        // Función para establecer el valor en el campo de texto
        function cargarValor(boton) {
            campoTexto.value = boton.value;
        }

        // Agregar event listeners a los botones
        boton1.addEventListener('click', () => cargarValor(boton1));
        boton2.addEventListener('click', () => cargarValor(boton2));