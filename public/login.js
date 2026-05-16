function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  return password.length >= 8;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error-message') || document.createElement('div');
    errorDiv.id = 'error-message';
    errorDiv.style.color = 'red';
    form.appendChild(errorDiv);

    if (!validateEmail(email)) {
      errorDiv.textContent = 'Please enter a valid email address.';
      return;
    }
    if (!validatePassword(password)) {
      errorDiv.textContent = 'Password must be at least 8 characters.';
      return;
    }

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        window.location.href = '/';
      } else {
        errorDiv.textContent = data.message || 'Login failed.';
      }
    } catch (err) {
      errorDiv.textContent = 'Network error. Please try again.';
    }
  });
});