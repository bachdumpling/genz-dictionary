# **GenZ Dictionary**

GenZ Dictionary is a web application that serves as a dictionary for GenZ slang. It leverages the Urban Dictionary API and a TikTok comment slang analysis data model as its backend, providing a platform where users can search for the meaning of various GenZ terms and phrases. The application is built with Next.js and leverages Google Analytics for tracking user interactions.

## **Features**

### **TikTok Comment Slang Analysis**

- **Data Collection & Preprocessing**: Utilized web scraping, Python, and NLP tools like NLTK, TextBlob to collect and preprocess 25,000 TikTok comments for slang usage.
- **Word Ranking Models & Popularity Trends Visualization**: Analyzed the data to create word ranking models and visualize popularity trends.
- **Marketing Strategies**: Translated insights into actionable marketing strategies.

## **Project Structure**

The project is structured as follows:

- **`app`**: Main application code, including authentication, components, dictionary, and thesaurus functionalities.
- **`atoms`**: State management atoms for the application.
- **`pages`**: Next.js pages for the application.
- **`public`**: Public assets like logos and icons.
- **`styles`**: Global and component-specific styles.

## **Installation**

To install and run the project locally, follow these steps:

1. Clone the repository.
2. Install the dependencies with **`npm install`**.
3. Start the development server with **`npm run dev`**.
