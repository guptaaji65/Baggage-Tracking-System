// Created by Aditya Gupta

document.addEventListener('DOMContentLoaded', function() {
    console.log("Baggage Management System Initialized!");
    
    // Example function to update baggage status
    function updateBaggageStatus(baggageId, status) {
        fetch('/api/baggage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ baggageId, status })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
        })
        .catch(error => console.error('Error:', error));
    }
    
    // Call the updateBaggageStatus function for example
    updateBaggageStatus('BAG123', 'Checked-in');
});
