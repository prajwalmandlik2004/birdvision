## E-commerce application using React that fetches product data from the Dummy JSON API - Birdvision Assignment for Frontend Position

## Live Deployed Link : https://ecommerce-birdvision.netlify.app/

## Installation Guide

1. **Clone the Repository** :
   Clone the repository and navigate to the project folder.
   ```bash
   git clone https://github.com/prajwalmandlik2004/birdvision.git

2. **Install Dependencies** : 
   Install the necessary dependencies using npm.
   ```bash
   npm install

3. **Start the Application** :
   Run the app on a local development server.
   ```bash
   npm start
   
4. **Access the App: Open your browser and go to http://localhost:3000 to view the product listing page.**

## Approach

1. **Component Structure**
   - Created a `ProductListing` component to handle the main layout, including the product grid, pagination, header, and footer.
   - Implemented a `ProductCard` component to display individual product details, such as an image, title, and description.

2. **Product Data Fetching**
   - Used an asynchronous `fetchProducts` function to retrieve product data in batches of 10 items, based on the current page number.
   - Leveraged the `useEffect` hook to re-fetch data whenever the `page` state changes, ensuring that the correct set of products is displayed.

3. **Pagination Logic**
   - Controlled page navigation through "Previous" and "Next" buttons, which update the `page` state variable when clicked.
   - Disabled the "Previous" button on the first page to prevent users from navigating to non-existent negative pages.

4. **Styling**
   - Applied modular CSS to create a responsive design that adapts to different screen sizes.
   - Styled the header, footer, and pagination buttons consistently, ensuring a cohesive look and feel across the application.

