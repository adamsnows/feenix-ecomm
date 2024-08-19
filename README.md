<h1 align="center">
    <img src="https://www.feenix.ai/wp-content/uploads/2023/11/Group.png" width="30px" /> <a href="https://feenix-test.vercel.app/" target="_blank">Feenix E-Commerce</a> <img src="https://www.feenix.ai/wp-content/uploads/2023/11/Group.png" width="30px" />
</h1>

<h3 align="center">Your modern and intuitive online store.</h3>

<br/>

This project is an e-commerce application developed as part of the technical test for Feenix. The application was built using **Next.js** and **React**, focusing on a modern interface, shopping cart functionalities, global state management, and integration with a product API.

## 🛠 Technologies Used

- [x] [Next.js 14](https://nextjs.org/) - The React Framework for Production
- [x] [Tailwind CSS](https://tailwindcss.com/) - CSS Framework for styling
- [x] [Axios](https://axios-http.com/) - HTTP client for requests
- [x] [RizzUI](https://rizzui.com/) - UI component library
- [x] [Fake Store API](https://fakestoreapi.com/) - API for product data
- [x] [Vercel](https://vercel.com/) - Deployment tool for the application

### ✅ Demo Link

- [x] Frontend -> <a href="https://feenix-test.vercel.app/" target="_blank">App Link</a>

### ✅ How to Run the Application Locally

First, you need the following technologies:

- [x] [Git](https://git-scm.com)
- [x] [NPM](https://www.npmjs.com/)
- [x] [VSCode](https://code.visualstudio.com/)

### ✍️ Dev strategies

1. **User Interface (UI)**: The UI was developed with a mobile-first approach, ensuring responsiveness and accessibility. Key components include product cards, a sticky header with navigation, and a dynamic shopping cart.

2. **Shopping Cart Functionality**: The cart is managed using the Context API, allowing items to be added, removed, and displayed across the app. The cart data is stored in LocalStorage, making it persistent even after page reloads.

3. **User Authentication**: The app checks if a user is logged in before allowing access to certain features, such as adding items to the cart. User data is stored in LocalStorage and dynamically loaded upon page load.

4. **Dynamic Routing**: Each product has its own page, dynamically rendered based on the product ID using Next.js routing.

5. **Error Handling**: The project includes basic error handling for failed API requests and missing product data, providing a smooth user experience.

### 🎲 Setting Up the Environment

```bash
# Clone this repository

$ git clone git@github.com:adamsnows/feenix-test.git


# Navigate into the cloned repository

$ cd feenix-test

$ npm install


$ npm run dev

# After this, Next.js will inform you of the port where your application is running. Simply hold the CTRL key and click on the localhost link!!

# Done, now the environment is fully set up!
```
