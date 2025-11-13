export default {
  projects: [
    {
      bedges: ["mdi:language-javascript"],
      title: "Look for a Book",
      description:
        "Look for a Book is a book search website powered by Open Library, realized with JavaScript and designed with Material Design for Bootstrap. More details on the Github repo.",
      features: [
        "Use of Open Library API.",
        "Search function.",
        "Displaying of list with the search results and respective general info.",
        "Possibility to consult the description of each book in the list.",
      ],
      thumbnail: "/img/thumbnails/look-for-a-book-img.webp",
      siteLink: "https://gio-mex.github.io/look-for-a-book/dist/",
      repoLink: "https://github.com/Gio-Mex/look-for-a-book",
    },
    {
      bedges: ["mdi:angular"],
      title: "Angular Social",
      description:
        "Angular Social is a basic simulation of a social network powered by Go REST. It is realized with Angular and designed with Angular Material. More details on the Github repo.",
      features: [
        "Login & Logout using GoRest API with Bearer Token.",
        "User list with basic info, search, record count control, add/remove users.",
        "User detail page with full info, posts and comments, add comments.",
        "All posts view with search, add posts, view/manage comments.",
        "Unit testing with minimum 60% coverage.",
        "Modular structure with lazy loading.",
      ],
      thumbnail: "/img/thumbnails/angular-social-img.webp",
      siteLink: "https://angular-social.netlify.app",
      repoLink: "https://github.com/Gio-Mex/angular-social",
    },
    {
      bedges: ["mdi:angular"],
      title: "Ng TECH",
      description:
        "Ng TECH is a basic portal for tech news powered by Hacker News. It is realized with Angular and designed with Angular Material. More details on the Github repo.",
      features: [
        "Use of Hacker News API.",
        "Displaying of the latest news, with their general info.",
        "Displaying 10 news items at a time with pagination.",
      ],
      thumbnail: "/img/thumbnails/ng-TECH-img.webp",
      siteLink: "https://ng-tech-d274a.web.app",
      repoLink: "https://github.com/Gio-Mex/ng-TECH",
    },
    {
      bedges: ["lineicons:react"],
      title: "Happie Veggie",
      description:
        "This app uses Spoonacular to search and view vegetarian recipes (up to 100 per query). Built with React, TypeScript, Tailwind, and Shadcn. Note: free usage has a daily search limit.",
      features: [
        "A search bar to search recipes.",
        "Displaying of list with the search results and respective cover images.",
        "Possibility to consult the description of each recipe in a dedicated page.",
        "UI and UX simple and easy to use. Responsive design.",
        "Implement unit tests with at least 60% coverage.",
        "Other features: use React Router, Axios, React Hooks and Redux.",
      ],
      thumbnail: "/img/thumbnails/happie-veggie-img.webp",
      siteLink: "https://happie-veggie.netlify.app",
      repoLink: "https://github.com/Gio-Mex/happie-veggie",
    },
    {
      bedges: ["mdi:vuejs"],
      title: "Tic Tac Toe",
      description:
        "The classic Tic Tac Toe game, developed in Vue.js with JavaScript",
      features: [
        "Display a 3x3 grid on the page upon user access.",
        "Clicking on a cell alternates between X and O. The first move is always X.",
      ],
      thumbnail: "/img/thumbnails/tic-tac-toe-img.webp",
      siteLink: "https://vue-tictactoe-game.netlify.app/",
      repoLink: "https://github.com/Gio-Mex/tic-tac-toe",
    },
    // {
    //   bedges: ["mdi:vuejs"],
    //   title: "Kreas Shop",
    //   description:
    //     "This project reproduces the functioning of a hypothetical synthetic meat shop, with the product search function and shopping cart. It was developed with Vue.js in Typescript.",
    //   features: [
    //     "Optimized for mobile devices first.",
    //     "Display a list of all products retrieved from the API, with their name, price and image.",
    //     "Possibility to navigate to a dedicated product page.",
    //     "Cart page with a list of all products added to the cart, that simulates buying them.",
    //   ],
    //   thumbnail: kreasShopImg,
    //   siteLink: "https://vue-kreas-shop.netlify.app",
    //   repoLink: "https://github.com/Gio-Mex/kreas-shop",
    // },
    {
      bedges: ["mdi:wordpress"],
      title: "Pomelia Hotel",
      description:
        "This Wordpress project recreate a simple website for an hypothetical eco-friendly hotel. The theme was developed with both Gutenberg and custom CSS classes.",
      features: [
        "Custom theme in Wordpress.",
        "Contact form.",
      ],
      thumbnail: "/img/thumbnails/pomelia-hotel-img.webp",
      repoLink: "https://github.com/Gio-Mex/pomelia-hotel",
    },
    {
      bedges: ["mdi:nodejs"],
      title: "Planty of Food APIs",
      description:
        "This Node.js project replicates JSON RESTful APIs for a hypothetical platform managing Planty of Food purchasing groups. Built with Express, MongoDB, and Mongoose. Mocha, Chai, and Sinon were used for testing. More details on GitHub.",
      features: [
        "Follow REST principles including naming, methods, and status codes.",
        "Manage products with a name field (add, update, delete).",
        "Manage users with name, surname, and email (add, update, delete).",
        "Manage sales orders with associated products and users (add, update, delete).",
        "View all orders with filters by date and products.",
      ],
      thumbnail: "/img/thumbnails/planty-of-food-img.webp",
      repoLink: "https://github.com/Gio-Mex/planty-of-food-api",
    },
    {
      bedges: ["mdi:language-php"],
      title: "Orizon APIs",
      description:
        "This PHP project recreates the JSON RESTful APIs for the hypothetical Orizon travel agency.",
      features: [
        "Use RESTful APIs with correct naming, HTTP methods, and status codes.",
        "Manage countries with a single name field (create, update, delete).",
        "Manage trips with countries and available seats (create, update, delete).",
        "Retrieve and filter trips by country and seat availability.",
        "Use MySQL database.",
      ],
      thumbnail: "/img/thumbnails/orizon-api-img.webp",
      repoLink: "https://github.com/Gio-Mex/orizon-api",
    },
    {
      bedges: ["mdi:vuejs", "mdi:nodejs"],
      title: "Work 4 Me",
      description:
        "This is my first full-stack project. It’s a hypothetical platform where users can ask other users for help with various small household tasks in exchange for a payment. It was built with Vue.js and Node.js.",
      features: [
        "User registration with password hashing via Bcrypt.",
        "Login, access token management with JWT, session expiration after 30 minutes and automatic logout.",
        "Real-time notifications/updates and live chat via Socket.io.",
        "User profile management and avatar storage with Cloudinary.",
        "Map display using Leaflet and OpenStreetMap.",
      ],
      thumbnail: "/img/thumbnails/work-4-me-img.webp",
      siteLink: "https://work-4-me.netlify.app",
      repoLink: "https://github.com/Gio-Mex/work-4-me",
    },
    {
      bedges: ["mdi:vuejs", "mdi:firebase"],
      title: "Change Cut Barber Shop",
      description:
        "This is my first real project. It’s a barbershop website. It was built with Vue.js and Firebase.",
      features: [
        "Custom Control Panel.",
        "Admin login with Firebase authentication.",
        "Data storage and management with Firestore.",
        "Mobile friendly design.",
      ],
      thumbnail: "/img/thumbnails/change-cut-img.webp",
      siteLink: "https://change-cut.netlify.app",
    },
  ],
};
