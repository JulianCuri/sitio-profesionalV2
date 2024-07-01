window.addEventListener('load', function() {
    if (!localStorage.getItem('visited')) {
        alert('¡Bienvenido/a a nuestra página de servicios de coaching ejecutivo!');
        localStorage.setItem('visited', true);
    }

    const darkMode = localStorage.getItem('darkMode') === 'enabled';
    if (darkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
    }

    document.getElementById('darkModeToggle').addEventListener('change', function() {
        const body = document.body;
        body.classList.toggle('dark-mode');
        const mode = body.classList.contains('dark-mode') ? 'enabled' : 'disabled';
        localStorage.setItem('darkMode', mode);
    });

    document.getElementById('myForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('El formulario se envió. ¡Gracias por contactarnos!');
    });
    
});
