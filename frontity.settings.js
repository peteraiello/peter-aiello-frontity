const settings = {
  "name": "my-app",
  "state": {
    "frontity": {
      "url": "https://peteraiello.co.uk",
      "title": "Peter Aiello | Coding Experience",
      "description": "Freelance Full-Stack Developer"
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
          "params": {
            "per_page": 10
          }
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
