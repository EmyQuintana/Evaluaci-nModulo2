
document.addEventListener('DOMContentLoaded', function() {

    // 1. VALIDACIÓN DEL FORMULARIO DE CONTACTO
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar que se recargue la página
            event.stopPropagation();

            let isValid = true; // para saber si todo está bien

            // Obtener los campos
            const emailInput = document.getElementById('email');
            const asuntoInput = document.getElementById('asunto');
            const mensajeInput = document.getElementById('mensaje');
            const successAlert = document.getElementById('formSuccess');

            // Función de ayuda para marcar error o éxito
            // Usa las clases de Bootstrap 'is-invalid' y 'is-valid'
            function validateField(input, condition) {
                if (condition) {
                    input.classList.remove('is-invalid');
                    input.classList.add('is-valid');
                    return true;
                } else {
                    input.classList.remove('is-valid');
                    input.classList.add('is-invalid');
                    return false;
                }
            }

            // Validar Email 
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!validateField(emailInput, emailRegex.test(emailInput.value))) {
                isValid = false;
            }

            // Validar Asunto (No vacío)
            if (!validateField(asuntoInput, asuntoInput.value.trim() !== "")) {
                isValid = false;
            }

            // Validar Mensaje (No vacío)
            if (!validateField(mensajeInput, mensajeInput.value.trim() !== "")) {
                isValid = false;
            }

            //  Si todo es válido
            if (isValid) {
                // Mostrar alerta de éxito
                successAlert.classList.remove('d-none');
                
                // Opcional: Ocultar la alerta después de 5 segundos
                setTimeout(() => {
                    successAlert.classList.add('d-none');
                }, 5000);

                // Limpiar el formulario y quitar marcas de validación
                contactForm.reset();
                emailInput.classList.remove('is-valid');
                asuntoInput.classList.remove('is-valid');
                mensajeInput.classList.remove('is-valid');
                
                console.log("Formulario enviado correctamente.");
            }
        });
    }
});

// 2. LÓGICA DEL TEST DE CIBERSEGURIDAD
    const btnCalcular = document.getElementById('btnCalcularTest');
    
    if (btnCalcular) {
        btnCalcular.addEventListener('click', function() {
            // A) Confirmación de envío (Requisito 1)
            if (!confirm("¿Estás seguro de que quieres enviar tus respuestas para evaluación?")) {
                return; // Si el usuario cancela, no hacemos nada
            }

            // B) Obtener respuestas marcadas
            const q1 = document.querySelector('input[name="q1"]:checked');
            const q2 = document.querySelector('input[name="q2"]:checked');
            const q3 = document.querySelector('input[name="q3"]:checked');

            // Validar que se hayan respondido todas
            if (!q1 || !q2 || !q3) {
                alert("Por favor, responde las 3 preguntas para obtener tu diagnóstico.");
                return;
            }

            // C) Calcular Puntaje (Requisito 2)
            // Los values en el HTML son "10" (correcta) o "0" (incorrecta)
            const puntajeTotal = parseInt(q1.value) + parseInt(q2.value) + parseInt(q3.value);
            const aciertos = puntajeTotal / 10; // Convertimos 30 puntos a "3" aciertos

            // D) Mostrar Resultado
            const resultDiv = document.getElementById('quizResult');
            resultDiv.classList.remove('d-none', 'alert-success', 'alert-warning');
            
            // Limpiamos contenido previo
            resultDiv.innerHTML = "";

            if (aciertos === 3) {
                // --- ESCENARIO: SEGURO (3/3) ---
                resultDiv.classList.add('alert-success');
                resultDiv.innerHTML = `
                    <h4><i class="bi bi-shield-check"></i> ¡Excelente! (3/3)</h4>
                    <p class="mb-0">Tu nivel de ciberseguridad es alto. ¡Sigue así!</p>
                `;
            } else {
                // --- ESCENARIO: RIESGO (Menos de 3/3) ---
                resultDiv.classList.add('alert-warning');
                resultDiv.innerHTML = `
                    <h4><i class="bi bi-exclamation-triangle"></i> Resultado: ${aciertos}/3</h4>
                    <p>Detectamos vulnerabilidades en tus hábitos.</p>
                    <hr>
                    <p class="fw-bold mb-2">Te ayudamos, contáctanos para asesoría.</p>
                    <button id="btnRedirigirContacto" class="btn btn-dark btn-sm w-100">
                        <i class="bi bi-arrow-down-circle"></i> Ir al Formulario de Ayuda
                    </button>
                `;

              const btnRedirigir = document.getElementById('btnRedirigirContacto');
                
                if (btnRedirigir) {
                    btnRedirigir.addEventListener('click', function() {
                        
                        // 1. CERRAR MODAL (Forma Robusta)
                        const modalElement = document.getElementById('modalTest');
                        // Usamos 'getOrCreateInstance' para evitar errores si la instancia no existía
                        const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement);
                        modalInstance.hide();

                        // 2. ABRIR EL FORMULARIO (Acordeón)
                        const collapseElement = document.getElementById('collapseContacto');
                        const collapseInstance = bootstrap.Collapse.getOrCreateInstance(collapseElement);
                        collapseInstance.show();

                        // 3. SCROLL SUAVE HACIA EL FORMULARIO
                        // Damos un pequeño respiro (300ms) para que el modal termine de cerrarse
                        setTimeout(() => {
                            collapseElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            // Poner foco en el campo email para que el usuario pueda escribir directo
                            const emailInput = document.getElementById('email');
                            if (emailInput) emailInput.focus();
                     }, 300);
                    });
                }
            } 

            //  mostramos el div con el resultado
            resultDiv.classList.remove('d-none');
        });
    }