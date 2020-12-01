# Project: New personal site built using the Frontity framework. 

[Frontity](https://frontity.org/) is a new React based framework for WordPress, similar to Gatsby and Next.Js. Whereas other frameworks feature integration with many different kinds of CMS's, Frontity is a dedicated WordPress framework.

Read more about the project [here](https://peteraiello.dev/designing-and-developing-my-new-personal-website/).

There's a discussion happening in the forums [here](https://community.frontity.org/t/developing-my-new-personal-website-using-frontity/3417/13).

# Project overview

The development of the project took place over a few weeks. The project code is from scratch with a few exceptions, including the pagination component (borrowed from the demo theme, [mars](https://docs.frontity.org/guides/understanding-mars-theme-1)). 

# JavaScript Proxies, React UI and Managing State using Hooks

The Frontity framework drastically differs from WordPress and React integrations. Instead of using React as UI framework within PHP templates, Frontity uses [JavaScript Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) to work with WordPress data from the REST API.

Interestingly, the data used in the React theme is publically viewable on the production URL. For example, if you open the console whilst on the site and type in `frontity.state.source.get('/')`, and then expand `Proxy` and `Target`, it's possible to see how the framework exposes some of the data associated with WordPress for the Homepage (i.e. `id`, `isHome`, `isPostType`).

The Frontity framework also comes with Global State already implemented in the form of [actions](https://docs.frontity.org/learning-frontity/actions). For example, to implement the UI for the mobile menu (open or closed), a boolean for the mobile menu state is added to the theme settings in `index.js`. Then conditional React code is used to decide to display the menu as opened or closed. 

# Styling and SVG Animations.

The project included a bespoke design for a landing page which required the custom CSS clip-path property, as well as keyframes to produce panning effects. The internal pages also use the `clip-path` property with SVGs. 

The build for the site uses mobile-first techniques, where concepts are designed both for mobile and desktop, and developers work from the mobile view outwards. 

Instead of using responsive frameworks (Bootstrap, Foundation, Bulma or TailwindCSS), the styles for the project use CSS in JS (with some exception being the ones used for Gutenberg compatibility). Flex-box handles responsive elements (Nav, Footer, Containers). 

# Cross-browser Testing, Debugging and Site Performance.

As with all projects, browser testing was crucial for ensuring a high-quality user experience across all devices. 

**Devices include**
* Mobile (iPhone 8)
* Tablet (iPad)
* Desktop

**Browsers include**
* Firefox
* Chrome 
* Safari

In terms of performance, the site currently achieves A-Grade status using pingdom. The site also has a good score (green) from testing Google Lighthouse for the categories of accessibility, performance and SEO. The site speed score differs from time to time (assumingly based on the level of cache), and optimisation is ongoing.

# Future Features for the site

Ideas for future functionality that may be helpful include: 
* Social media share buttons for the posts
* An estimated read time for the posts 
* A case studies section for projects

# Thank you

Thank you to the team over at Frontity for making such a well-documented framework. Also thanks to my friends and family who provided essential feedback on the project: Anthony, Russell, Daniel, Tim, Lawrence, Clive and Sophie. 