<script>
  document.addEventListener("DOMContentLoaded", function() {
    const elementosAnimar = document.querySelectorAll('.scroll-text');
    
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('show');
          observador.unobserve(entrada.target); 
        }
      });
    }, { threshold: 0.2 });
    
    elementosAnimar.forEach(elemento => {
      observador.observe(elemento);
    });
  });
</script>