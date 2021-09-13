# movies-listing
Movies listing angular web app to list down some movies, search from the list and can open any movie detail. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.27.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# List Page
You can have list of movies, here I am using json file to load list of movies, you may use service API to load from you server.
In List page it will show up the list with some basic detail like shown in the image.

![movies-list-page](https://user-images.githubusercontent.com/45449860/132974505-08d87d3f-439f-431a-a711-a2d7032e4040.PNG)

# Search from the List
You may search from the list with the name of movie. Search input is shown on the top of list page. I'm using search filter pipe, you may check the pipes directory from the project to get the basic idea of search filter pipe.

![search-movies-list-page](https://user-images.githubusercontent.com/45449860/132974549-43d45c7c-34d8-48ce-aa3e-66ac288c0822.PNG)

# Detail page
You may open any movie to view description, rating and some other details of movie.

![movie-detail-page](https://user-images.githubusercontent.com/45449860/132974609-a23185dc-199a-406a-bac0-2508325412d3.PNG)

