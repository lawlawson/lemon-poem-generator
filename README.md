# Lemon Poem Generator 🍋

This repository demonstrates how to create a **Lemon Poem Generator**, a simple application built with Express that serves as both a backend server and a webpage for generating fun, AI-powered poems about lemons.

### 🌐 Live Demo

Check out the live version here: [Lemon Poem Generator](https://lemon-poem-generator.onrender.com)  
_(Note: The live version may take a few minutes to spin up due to free-tier hosting on Render.com.)_

---

## Features

- **AI-Powered Poetry:** Generates unique poems about lemons using the OpenAI API and GPT-4o Mini.
- **Express Server:** Backend API built with Express to handle poem generation requests.
- **Web Interface:** A simple and user-friendly webpage to generate poems on demand.

---

## Technologies Used

- **Backend:** Node.js with Express
- **AI Integration:** OpenAI API
- **Frontend:** HTML, CSS, and JavaScript
- **Hosting:** Render.com (Free Tier)

---

## Installation

To run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/lemon-poem-generator.git
   cd lemon-poem-generator
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the OpenAI API Key:**

   - Create a `.env` file in the root directory.
   - Add your OpenAI API key:
     ```env
     OPENAI_API_KEY=your-api-key-here
     ```

4. **Start the server:**
   ```bash
   npm start
   ```
   The server will run on [http://localhost:3000](http://localhost:3000).

---

## Usage

1. Visit the webpage hosted on the live demo or locally at `http://localhost:3000`.
2. Click the **Generate Poem** button to receive a unique AI-generated poem about lemons.
3. Enjoy the citrusy creativity! 🍋

---

## Deployment

The project is deployed on Render.com. To deploy your own instance:

1. Push your repository to GitHub.
2. Link the repository to your Render account.
3. Add the `OPENAI_API_KEY` environment variable in the Render settings.

---

## Future Improvements

- Add user inputs to customize the theme of the poem.
- Improve the UI/UX of the webpage.
- Expand to generate poems about other fruits or topics.

---

## Contributing

Contributions are welcome! Feel free to fork the repository, submit issues, or create pull requests.

---

## Acknowledgments

- Thanks to OpenAI for providing the GPT-4o Mini model.
- Hosted with love on [Render.com](https://render.com).
- Original project by @hortfrancis [https://github.com/hortfrancis/lemon-poem-generator](https://github.com/hortfrancis/lemon-poem-generator)

---

Enjoy the Lemon Poem Generator 🍋✨
