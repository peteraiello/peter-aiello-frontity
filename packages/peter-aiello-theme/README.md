
# Notes on Working with Frontity 

(Starting point)[https://frontity.org/blog/how-to-create-a-react-theme-in-30-minutes/]

Frontity uses (ES2015 Proxies). 

You can inspect state in the console: 

`frontity.state` 

You can access the URL for the current page (id, isPage etc) using the following:

`frontity.state.source.data`

You can access the data for the page (authorm content, id, menu order, slug etc etc) using the following:

`frontity.state.source.page[15]` (replace `15` with the id of the page you wish to inspect).


Alternatively to `frontity.state.source.data` you can use `frontity.state.source.get`.

i.e. `frontity.state.source.get("/")` (get the home page).

or `frontity.state.source.get("/blog/")` 

On archive page (i.e. blog), you can get the posts as `items`.
