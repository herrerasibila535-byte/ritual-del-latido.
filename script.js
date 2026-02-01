document.addEventListener('DOMContentLoaded', () => {
    
    // CLAVE DE ACCESO: 25 de enero de este año (2026)
const CLAVE_CORRECTA = "25/01/2026"; 


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
});:root {
    --bg-dark: #050202;
    --blood-red: #8a1c1c;
    --glow-red: #ff1a1a;
    --gold: #c5a059;
    --parchment: #dcd0c0;
}

body {
    background-color: var(--bg-dark);
    margin: 0;
    overflow-x: hidden;
    background-image: radial-gradient(circle at center, #110101 0%, #050202 100%);
    color: #dcdcdc;
    font-family: 'Crimson Text', serif;
}

#pantalla-bloqueo {
    position: fixed; inset: 0; background: var(--bg-dark);
    display: flex; justify-content: center; align-items: center; z-index: 1000;
    transition: opacity 1.5s ease;
}

.lock-container { text-align: center; color: var(--gold); font-family: 'Cinzel', serif; }

#input-clave {
    background: transparent; border: none; border-bottom: 2px solid var(--blood-red);
    color: white; text-align: center; padding: 10px; font-size: 1.2rem; outline: none; margin-top: 20px;
}

#contenido-secreto { opacity: 0; display: none; transition: opacity 2s ease-in; }

.main-container { max-width: 450px; margin: 0 auto; padding: 40px 20px; text-align: center; }

h1 { font-family: 'Cinzel', serif; color: var(--gold); letter-spacing: 4px; border-bottom: 1px solid var(--blood-red); padding-bottom: 10px; }

/* EFECTO FUEGO CORAZÓN */
.heart-wrapper { position: relative; margin: 50px auto; width: 250px; }
.glowing-heart {
    width: 100%;
    filter: drop-shadow(0 0 15px var(--blood-red)) brightness(1.2);
    animation: heartbeat 3s infinite ease-in-out;
}

@keyframes heartbeat {
    0%, 100% { transform: scale(1); filter: drop-shadow(0 0 15px var(--blood-red)); }
    50% { transform: scale(1.05); filter: drop-shadow(0 0 35px var(--glow-red)); }
}

.label-orbit {
    position: absolute; font-family: 'Cinzel', serif; font-size: 0.7rem; color: #fff;
    text-shadow: 0 0 10px var(--glow-red);
}
.top-left { top: 0; left: -20px; } .top-right { top: 0; right: -20px; }
.bottom-left { bottom: 20px; left: -30px; } .bottom-right { bottom: 20px; right: -30px; }

/* PERGAMINO */
.ancient-scroll {
    background: var(--parchment); color: #2b1b17; padding: 40px 20px;
    border-radius: 2px; position: relative; margin: 50px 0;
    box-shadow: 0 0 30px rgba(0,0,0,0.8); transform: rotate(-1deg);
}
.wax-seal {
    position: absolute; top: -25px; left: 50%; transform: translateX(-50%);
    width: 50px; height: 50px; background: var(--blood-red); border-radius: 50%;
    display: flex; align-items: center; justify-content: center; color: white;
    font-family: 'Cinzel'; border: 2px solid #300;
}

.handwritten { font-family: 'Great Vibes', cursive; font-size: 2.8rem; color: var(--gold); }
.signature { font-family: 'Great Vibes', cursive; font-size: 2rem; color: var(--blood-red); margin-top: 15px; }

footer { margin-top: 50px; font-size: 0.75rem; color: #555; letter-spacing: 2px; line-height: 1.5; }
document.addEventListener('DOMContentLoaded', () => {
    
    // CLAVE DE ACCESO: 25 de enero de 2026
    const CLAVE_CORRECTA = "25/01/2026"; 

    window.intentarEntrar = function() {
        const input = document.getElementById('input-clave').value;
        const pantalla = document.getElementById('pantalla-bloqueo');
        const contenido = document.getElementById('contenido-secreto');
        const musica = document.getElementById('bgMusic');

        if (input === CLAVE_CORRECTA) {
            pantalla.style.opacity = '0';
            
            setTimeout(() => {
                pantalla.style.display = 'none';
                contenido.style.display = 'block';
                
                setTimeout(() => {
                    contenido.style.opacity = '1';
                    musica.volume = 0.4;
                    musica.play().catch(() => console.log("Música silenciada por el navegador"));
                }, 100);
            }, 1500);
        } else {
            const msgError = document.getElementById('mensaje-error');
            msgError.innerText = "Esa cifra no abre este corazón.";
            msgError.style.color = "#ff4d4d";
        }
    };
});
    

