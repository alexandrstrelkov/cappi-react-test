export default function initScripts() {
  // Time selector functionality
  document.querySelectorAll('[data-time-selector]').forEach((btn) => {
    btn.addEventListener('click', function () {
      this.parentElement.querySelectorAll('[data-time-selector]').forEach((b) => {
        b.classList.remove('active');
      });
      this.classList.add('active');
      console.log('Time period selected:', this.textContent.trim());
    });
  });

  // Connect Wallet button functionality
  document.querySelectorAll('[data-connect-wallet]').forEach((btn) => {
    btn.addEventListener('click', function () {
      alert('Wallet connection would be implemented here');
    });
  });

  // Claim button functionality
  document.querySelector('[data-claim]')?.addEventListener('click', function () {
    alert('Rewards claim would be implemented here');
  });
}
