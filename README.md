# Currency_Converter_Dynamic

This is a simple web-based currency converter application that fetches real-time exchange rates using an API. The app allows users to input an amount in one currency and convert it to another.

Features
Validate user input to ensure proper numeric values.
Fetch live exchange rates via an external API.
Provide conversion results with proper error handling.
Reset the form to its default state.
Requirements
Frontend
HTML for structure
CSS for styling
Backend/Logic
JavaScript for form validation, API requests, and dynamic updates.
API
Currency Layer API (or any similar service)
Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/currency-converter.git
cd currency-converter
Update the apiKey variable in the convertCurrency function within the JavaScript code. Replace:

javascript
Copy code
const apiKey = "ADD YOUR API KEY";
with your actual API key.

Open index.html in your browser to use the application.
