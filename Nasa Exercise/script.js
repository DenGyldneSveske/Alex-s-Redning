// Define the NASA APOD API endpoint URL with your API key
const apiKey = 'NnGb1wy3TeOGI1rOVBJJiCzP8tAYXSNa2BWcfpdN'; 
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

// Send an HTTP request to the NASA APOD API endpoint and handle the response
fetch(apiUrl)
  .then(response => response.json()) // Parse the response data as JSON
  .then(data => {
    // Extract the URL, title, and explanation of the APOD from the response data
    const pictureUrl = data.url;
    const pictureTitle = data.title;
    const pictureExplanation = data.explanation;

    // Create HTML elements to display the APOD on the web page
    const pictureElement = document.createElement('img');
    pictureElement.src = pictureUrl;

    const titleElement = document.createElement('h1');
    titleElement.textContent = pictureTitle;

    const explanationElement = document.createElement('p');
    explanationElement.textContent = pictureExplanation;

    // Find the container element on the web page and append the APOD elements to it
    const containerElement = document.querySelector('.container');
    if (containerElement) {
      containerElement.appendChild(pictureElement);
      containerElement.appendChild(titleElement);
      containerElement.appendChild(explanationElement);
    } else {
      console.error('Error: Container element not found');
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error); // Log any errors to the console
  });