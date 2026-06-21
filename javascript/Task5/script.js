document.addEventListener('DOMContentLoaded', () => {
 
    const startInput = document.getElementById('start');
    const endInput = document.getElementById('end');
    const primeNumbersTextarea = document.getElementById('primeNumbers');
    const generateButton = document.getElementById('generate');

    
    startInput.value = 1;
    endInput.value = 100;



    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        
        if (num % 2 === 0 || num % 3 === 0) return false;
        
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        
        return true;
    }


    function generatePrimeNumbers() {
   
        const start = parseInt(startInput.value) || 1;
        const end = parseInt(endInput.value) || 100;

        if (start < 1) {
            alert('Start value must be at least 1');
            return;
        }
        
        if (end <= start) {
            alert('End value must be greater than the start value');
            return;
        }
        
      
        let primes = [];
        for (let i = Math.max(2, start); i <= end; i++) {
            if (isPrime(i)) {
                primes.push(i);
            }
        }
        
        if (primes.length > 0) {
            primeNumbersTextarea.value = primes.join(', ');
        } else {
            primeNumbersTextarea.value = 'No prime numbers found in the given range.';
        }
    }

    startInput.addEventListener('input', validateInput);
    endInput.addEventListener('input', validateInput);

    function validateInput() {
        const start = parseInt(startInput.value) || 0;
        const end = parseInt(endInput.value) || 0;
        
        
        generateButton.disabled = start < 1 || end <= start || end < 2;
    }


    validateInput();
});
