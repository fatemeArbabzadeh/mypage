const paymentOptions = document.querySelectorAll('.option');
const creditCardForm = document.querySelector('.payment-form');

paymentOptions.forEach(option => {
  option.addEventListener('click', function () {
    paymentOptions.forEach(o => o.classList.remove('active'));
    this.classList.add('active');

    if (document.getElementById('credit-card').checked) {
      creditCardForm.style.display = 'block';
    } else {
      creditCardForm.style.display = 'none';
    }
  });
});

document.querySelector('.purchase-btn').addEventListener('click', function (event) {
    event.preventDefault();
    
    const cardNumber = document.getElementById('card-number').value;
    const cvv = document.getElementById('cvv').value;
    const nameOnCard = document.getElementById('name-on-card').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
  
   
    const cardNumberPattern = /^\d{16}$/;
    if (!cardNumberPattern.test(cardNumber)) {
      alert('The Card Number is invalid');
      return;
    }
  
    const cvvPattern = /^\d{3}$/;
    if (!cvvPattern.test(cvv)) {
      alert('CVV is invalid');
      return;
    }
  
    alert('Payment has been made successfully')
  });