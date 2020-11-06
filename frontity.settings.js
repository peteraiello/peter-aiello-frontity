const settings = {
  "name": "my-app",
  "state": {
    "frontity": {
      "url": "https://peteraiello.co.uk",
      "title": "Peter Aiello | Coding Experience",
      "description": "UK Based Front-End Developer"
    }
  },
  "packages": [
    { 
      "name": "peter-aiello-theme",
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
    "@frontity/html2react",
    "@frontity/head-tags",
    "frontity-contact-form-7"
  ]
};

export default settings;
