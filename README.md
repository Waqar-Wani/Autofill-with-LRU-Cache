# Search Autofill Component

## Objective

Build a search autofill component using React (with Vite) that filters and displays results from a JSON dataset, with performance optimizations like debouncing and LRU caching, following the MVC architecture.

## Project Requirements

*   **Framework**: React (with Vite)
*   **Language**: TypeScript
*   **Architecture**: MVC (Model-View-Controller)

## Architecture Breakdown

### Model Layer (`src/models/`)

*   Loads and manages dummy data from `src/data/sampleData.json`.
*   Filters data based on user input (case-insensitive match).
*   Implements an **LRU Cache** (Least Recently Used) that stores up to 10 recent filtered inputs and their results.
*   Matches substring in results and wraps matched portion in `<strong>` tags.

### View Layer (`src/components/SearchView.tsx`)

*   Provides an **input field** for user queries.
*   Displays **filtered results** below the input.
*   **Highlights** matched substrings in **bold**.
*   Includes basic styling (`src/components/SearchView.css`).

### Controller Layer (`src/controllers/SearchController.ts`)

*   Handles input change events.
*   Uses a **debounce** function with a 300ms delay to trigger filtering.
*   Checks the cache for existing results.
*   Updates the UI when results are retrieved or filtered.

## Features

*   **Debounced Input**: Search is performed after a 300ms delay after the user stops typing, improving performance.
*   **LRU Cache**: Stores up to 10 recent search results to quickly return cached data for repeated queries.
*   **Substring Highlighting**: The matching portion of the search results is highlighted in bold.

## Setup and Installation

1.  Clone the repository (if applicable, otherwise, navigate to the project directory).

    ```bash
    # If cloning from a repository
    git clone <your-repository-url>
    cd <your-project-directory>
    ```

2.  Ensure you have Node.js installed. If not, download it from [https://nodejs.org/](https://nodejs.org/).

3.  Install the project dependencies:

    ```bash
    npm install
    ```

4.  Place your background image file (`desert-landscape.jpg`) in the `public` directory at the root of the project.

## Running the Application

To start the development server, run:

```bash
npm run dev
```

The application should open in your browser at `http://localhost:5173/` or another available port (check your terminal output).

## About the Author

Er. Waqar Wani

*   LinkedIn: [waqar-wani-b610941a5](https://www.linkedin.com/in/waqar-wani-b610941a5/)
*   GitHub: [Waqar-Wani](https://github.com/Waqar-Wani) 