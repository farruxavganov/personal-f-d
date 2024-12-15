// Fetch currency rates from ExchangeRate-API
export const fetchCurrencyRates = async (apiKey) => {
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.result === "success") {
            return data.conversion_rates;
        } else {
            throw new Error("Failed to fetch currency rates");
        }
    } catch (error) {
        console.error("Error fetching currency rates:", error);
        return null;
    }
};

// Convert amount from one currency to another
export const convertCurrency = (amount, rate) => {
    return (amount * rate).toFixed(2);
};
