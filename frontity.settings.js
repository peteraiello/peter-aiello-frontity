const settings = {
  "name": "my-app",
  "state": {
    "frontity": {
      "url": "https://peteraiello.co.uk",
      "title": "Coding Experience",
      "description": "Personal portfolio"
    }
  },
  "packages": [
    {
      "name": "peter-aiello-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://wordpress.peteraiello.co.uk/wp-json",
          "homepage": "home",
          "postsPage": "blog",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
