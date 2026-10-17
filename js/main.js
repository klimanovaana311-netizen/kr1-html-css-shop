document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.order-form');
  const button = form ? form.querySelector('button') : null;

  if (form && button) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const originalText = button.textContent;
      button.textContent = 'Отправка...';
      button.disabled = true;

      setTimeout(() => {
        button.textContent = 'Заявка отправлена!';
        button.style.backgroundColor = '#28a745';
        
        form.reset();
        
        setTimeout(() => {
          button.textContent = originalText;
          button.style.backgroundColor = '';
          button.disabled = false;
        }, 3000);
      }, 1000);
    });
  }
});