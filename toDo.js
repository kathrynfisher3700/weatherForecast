// The <body> section:
//     a. Create a header section:
//         i. Set the header to display centrally, with specific background and text colors, and padding.
//         ii. Inside the header, set a title such as "Weather Dashboard".  (DON'T USE WEATHER DASHBOARD)
    
//     b. Create a main content area with a specified maximum width:
//         i. Design a row layout:
//             1) To the left (1/4 of the layout), create an aside section:
//                 a. Display a subheading "Search for a City".
//                 b. Below that, set up a form for users to search:
//                     i. This form contains an inline layout.
//                     ii. There's a group for input elements where the user can type the name of a city.
//                     iii. Next to the input, there's a button labeled "Search" to submit the form.
//                     iv. Below the button, there's a horizontal line or some other denotation of the section's end.
//                 c. Below the form, there's a designated area for search history (not populated yet).
            
//             2) To the right (3/4 of the layout), there's a content area:
//                 a. Create a section for today's weather information (currently empty).
//                 b. Below that, create another section for a forecast (also currently empty).

//     c. Include external scripts at the end:
//         1. Link to a library called "day.js" for date formatting.
//         2. Link to plugins for "day.js" to handle different time zones.
//         3. Link to the website's main script file "script.js".

// The script file:
// - Initialize an empty array for the search history.
// - Define some constant URLs and API key for the weather API.
// - Identify required DOM elements (like search form, search input, etc.)
// - Extend date manipulation library with additional functionalities for UTC and time zones.

// - Create a function to display the search history on the page:
//     - Clear previous search history items from the display.
//     - Loop through the search history array from last to first:
//         - Create a button for each history item.
//         - Set appropriate attributes and content for each button.
//         - Add button to the display container for search history.

// - Create a function to add a new search item to the history:
//     - Check if the search is already in the history:
//         - If it's already there, don't add it again.
//     - Save the updated search history to the local storage.
//     - Refresh the displayed search history.

// - Create a function to get and display the saved search history when the page loads:
//     - Retrieve the search history from local storage.
//     - If it exists, update the search history variable and display it.

// - Create a function to display the current weather for a location:
//     - Extract and format the relevant weather details from provided data.
//     - Create new elements to display the weather details.
//     - Clear the previous weather details from the display.
//     - Add the new elements to the appropriate container.

// - Create a function to display a forecast card for a given day:
//     - Extract and format the relevant forecast details from provided data.
//     - Create new elements to display the forecast.
//     - Add the new elements to the appropriate container.

// - Create a function to display the 5-day forecast:
//     - Define the start and end times for the 5-day period.
//     - Loop through the provided forecast data:
//         - For each day within the 5-day range, especially around midday, display a forecast card.

// - Create a function to process and display both current weather and forecast using fetched data:
//     - Display the current weather using the first item in the data list.
//     - Display the 5-day forecast using the data list.

// - Create a function to fetch the weather data using a location's latitude and longitude:
//     - Build the URL to fetch weather using the provided location details and API key.
//     - Fetch the weather data:
//         - If successful, process and display the fetched data.

// - Create a function to fetch the coordinates for a given search term:
//     - Build the URL to fetch location details using the search term and API key.
//     - Fetch the location data:
//         - If a valid location is returned, update the search history and fetch its weather data.
//         - If not, alert the user about the invalid search.

// - Create a function to handle the submission of the search form:
//     - Prevent the default form action.
//     - If a valid search term is provided, fetch its coordinates.
//     - Clear the search input field.

// - Create a function to handle clicking on a button from the search history:
//     - If the clicked item is a history button:
//         - Retrieve the search term from the button.
//         - Fetch coordinates for that search term.

// - When the page loads, display the saved search history.
// - Attach event listeners to:
//     - Detect when the search form is submitted and then call the corresponding function.
//     - Detect when a search history button is clicked and then call the corresponding function.