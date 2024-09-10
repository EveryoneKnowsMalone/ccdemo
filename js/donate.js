document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let handler = PaystackPop.setup({
        key: 'pk_test_5fe055ba27dde15faf6ecae9de3624bbb0023a76',
        email: document.getElementById('email').value,
        amount: document.getElementById('amount').value * 100,  // Paystack expects the amount in kobo
        currency: "NGN",
        ref: 'PS-' + Math.floor((Math.random() * 1000000000) + 1), // Generates a random reference number
        callback: function(response) {
            // Payment succeeded, handle it here
            window.location.href = `/payment-success?reference=${response.reference}`;
        },
        onClose: function() {
            alert('Payment was not completed.');
        }
    });
    handler.openIframe();
});
