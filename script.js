//getting values from the form
async function convertCurrency() {
    const fromCurrency = document.f1.Convertfrom.value;
    const toCurrency = document.f1.Convertto.value;
    const amount = document.f1.inputc.value;

//validating
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

//api connection
    try {
        const apiKey = "ADD YOUR API KEY";
        const response = await fetch(`http://apilayer.net/api/live?access_key=${apiKey}&currencies=${toCurrency}&source=${fromCurrency}&format=1`);
        if (!response.ok) {
            throw new Error("Failed to fetch exchange rates. Please try again.");
        }

        const data = await response.json();

//data success or failure check
        if (!data.success) {
            alert("API error: " + data.error.info);
            return;
        }

//checking conversion rateKey and fetching data
        const rateKey = `${fromCurrency}${toCurrency}`;
        const rate = data.quotes[rateKey];

        if (!rate) {
            alert(`Conversion rate for ${toCurrency} not available.`);
            return;
        }

        const convertedAmount = (amount * rate).toFixed(2);
        document.f1.CC.value = convertedAmount;
    } catch (error) {
        console.error("Error:", error.message);
        alert("An error occurred while converting currency. Please try again later.");
    }
}

//form reset method
function resetForm() {
    document.f1.reset();
}
