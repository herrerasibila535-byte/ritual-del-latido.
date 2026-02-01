document.addEventListener('DOMContentLoaded', () => {
    
    // CLAVE DE ACCESO (Cámbiala aquí)
    const CLAVE_CORRECTA = "14/02/2023"; 

    window.intentarEntrar = function() {
        const input = document.getElementById('input-clave').value;
        const pantalla = document.getElementById('pantalla-bloqueo');
        const contenido = document.getElementById('contenido-secreto');
        const mensajeError = document.getElementById('mensaje-error');
        const musica = document.getElementById('bgMusic');

        if (input === CLAVE_CORRECTA) {
            pantalla.style.opacity = '0';
            
            setTimeout(() => {
                pantalla.style.display = 'none';
                contenido.style.display = 'block';
                
                // Transición suave de entrada
                setTimeout(() => {
                    contenido.style.opacity = '1';
                    musica.volume = 0.4;
                    musica.play().catch(() => console.log("Play manual requerido"));
                }, 100);
            }, 1500);
        } else {
            mensajeError.innerText = "Esa no es la llave de nuestro universo...";
            // Animación de sacudida
            document.getElementById('input-clave').style.animation = "shake 0.3s";
            setTimeout(() => { document.getElementById('input-clave').style.animation = ""; }, 300);
        }
    };
});
