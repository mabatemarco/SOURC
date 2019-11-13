# SOURC

## Description

A friendly experience for new or aged programmers and UX designers who can collaborate on a small or big project in a specific time frame. Programmers and designers can get in there reps and try on different challenges, both sides can get a better understanding on what each role does during a project and can also build on teamworking skills... Or just have fun hacking along.

---

## Features

- Create account
- Choose your role (SE/UX)
- Create projects you want to work on, with a timeframe
- Project is displayed on your account and on the main page
- Apply to projects with a form button and submit your email and slack username


--- 

##ERD

This ERD represents the MVP relationships between our databases

![ERD](img/ERD.png)

---

## API endpoints

'/users' : Displays all users, could be useful if we implement a user search.

'/projects' : Displays all projects, could be searched with queries.

'/users/:id' : Displays one user, used to view profiles.

'users/:id/projects' : Shows all projects belonging to user

'users/:id/projects/:projectId': Shows single project in detail

'users/:id/projects/:projectId/members: Shows the members (and leader) of a project

---

## WireFrame
![Landing Page](https://user-images.githubusercontent.com/55125468/68458237-4626e180-01d0-11ea-821f-1bab0285d0a1.png)
![Sign-Login Page](https://user-images.githubusercontent.com/55125468/68458240-46bf7800-01d0-11ea-983d-cd51c4acaa4b.png)
![Sign-up Page](https://user-images.githubusercontent.com/55125468/68462400-72dff680-01da-11ea-970e-81fc76f3cf55.png)
![Home Page](https://user-images.githubusercontent.com/55125468/68458236-4626e180-01d0-11ea-88fd-10ab75871f90.png)
![Project Page](https://user-images.githubusercontent.com/55125468/68458239-46bf7800-01d0-11ea-8fd4-2cf6c4587691.png)
![Profile](https://user-images.githubusercontent.com/55125468/68458238-4626e180-01d0-11ea-8d64-2df4fb8075ee.png)

## Group Logo
![p3_logo](https://user-images.githubusercontent.com/55125468/68462489-a3c02b80-01da-11ea-8303-d5a9c0614ce3.png)
