# FLL-School

FLL-School is a full-stack language learning school project. This README file provides an overview of the project.

Url - https://fll-school.web.app/

Click Visit [Fll-School](https://fll-school.web.app/)

<img src="./src/assets/logo.png" alt="Alt Text" style="height:70px; width:150px;" />

## Table of Contents

- [Project Description](#project-description)
- [Technology](#technology)
- [Used packages](#used-packages)

## Project Description

Fll-School is a full-stack web application. There are lots of functionalities in this project. Here users can buy different language courses. There are 3 roles for users. Student, Instructor, admin. A user can perform 1 position at a time.

- **User Registration and Authentication :** Users can create accounts and log in to access the learning materials and track their progress.
- **Course selection :** By default a new user will be a student. The student can see all the approved and available classes. He or She can select a class that is is available at moment. If there is no seats available for the specific class, student can not select the class.
- **Payment Gateway :** After selecting the class user can pay for the class. After successful payment user will be enrolled in the class. Here I used 'stripe' for payment.
- **Admin role :** The admin has some kind of superpower. The admin can approve or deny a post and can send feedback with the reason for denying the post.
- **User management :** The admin can make a user to admin or instructor.
- **Instructor role :** Instructor can add classes. After adding any classes, the class will pending for admin approval. If the admin approve the class the class will show on the classes page. If the admin denied the class the class will not show on the classes page.
- **Theme :** There are 2 themes in this project. By default, the theme will be light. If the user change theme the theme info will save on local storage. If the user reloads or closes the window and again visits the app the theme will retrieve from the storage.

## Technology

- Front-end : HTML | CSS | Tailwind CSS | React | React Router | Daisyui
- Back-end : Node js | Express js | Mongo DB
- Authentication : Firebase
- Deploy : Firebase | Vercel

## Used packages

- Axios
- React query
- React awesome reveal
- React stripe js
- Lottie react
- React hook form
- React icons
- Sweetalert2
- Swiper
