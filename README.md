# Gitmine
Search Github.

## Description
This is a web application that allows users to search Github users and repositories.
The application consumes the github search, users and repos API endpoints to pull information.

## Author

Francis Githae.

## BDD
- User keys in a search word on the search bar and clicks the search button.
- The application navigates to a search results page.
- The search results page displays users and repositories found.
- The app allows the user to click on a user card to view the details and repositories of the user.
- The app allows the user to click on a repository to view more details of the repositories, either on the search page or the single user view.
- The app show the time passed since the user account or repository was created.
- The user and repository card zooms in when a user hovers over them.

## Tools and Technologies used.
- Angular 13
- Typescript 3
- Bootstrap 5
- Moment js 2
- Node 14.17.6

## Installation  and Setup
To run this project locally:
1. Clone the repository.
```bash
git clone 
```

2. Navigate to the project folder

```
cd gitmine
```

3. Install dependencies

```
npm install
```

4. Add environment variables to environment.ts files in the environment folder.

- ApiUrl: 'https://api.github.com'

- AccessToken:'\<GitHub personal access token\>'

5. Run the application

```bash
ng serve --open
```

 
> The application should load on the browser at: localhost:4200

## Live Link

[Git Mine](https://gitmine.netlify.app)

## Contact 

Email: mureithigithae@gmail.com

## License

This project is under the MIT License [click here for more information](LICENSE)

&copy; 2021 Francis Githae