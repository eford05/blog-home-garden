import React from "react";
import "../styles/about.css";

function About() {
  return (
    <main className="about">
      <figure className="hero-fig">
        <img
          src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </figure>
      <h1 className="about-title">About Blog Home & Garden Project</h1>
      <div className="about-para-wrapper">
        <p className="about-para">
          Thank you for viewing my project. The project was highly inspired by
          Better Homes and Gardens. I love their website, I think it is just so
          beautiful. Before deciding to create this project I knew that I wanted
          to create a real world project. I decided to try my hands at
          developing a blog type of website because I felt like it was a bit
          more complex than the last project I worked on. However, I am not by
          any means a designer. So, I did look for the inspiration.
        </p>
        <p className="about-para">
          For this project, I again used HTML, CSS, and React. The pages are
          routed using react-router-dom inside of App.js. I created an array of
          objects called router with each page's route and element and then
          passed that array to the RouterProvider as a prop. I used
          react-router-dom Outlet to create a basic layout for all of the pages
          except the login and register pages.
        </p>
        <p className="about-para">
          I created a file called data.js to hold dummy data for the posts. I
          used this data to filter through the categories depending on what page
          was displayed. Each category uses the home path however each category
          extends the home path by it's category. For example the home has a
          path of "/" and decorating has a path of "/?cat=decor". In order to
          render the correct content depending on what was selected I created a
          simple Context that ordered each category by a number of 0 - 5, zero
          represented the intial home page, 1 for decor, 2 for home improvement,
          3 for gardening, 4 for housekeeping, and 5 for recipes. Inside the
          Navlinks and Footer components I used the universal context for
          setting the correct category through the on click event. Then inside
          of the Posts.jsx I used the category to filter and map the correct
          content.
        </p>
        <p className="about-para">
          I created another Context for displaying correct single pages when
          selected. It works similiar to how the setCat state works, the only
          difference is that the state updates with the id of the post. On each
          of the post links they contain an on click event that updates that
          state with the id of the post. The PostCard, SideTrend, and the
          Recommended use this universal state inside the mapped method. As each
          of the posts are mapped the on click event and the post id is mapped
          onto the links.
        </p>
        <p className="about-para">
          The newsletter modal created for this project simply uses state passed
          from parent to child component. Inside App.js I just created a state
          of showModal and setShowModal. I passed a prop of toggle using an
          anonymous function which just toggles the state (!showModal) to the
          Footer and the Navbar.
        </p>
        <p className="about-para">
          I hope you enjoyed viewing this project. I had so much fun working on
          it. I just can't wait to create more unique websites like this one.
          It's so exciting thinking about the world of posibilities for my next
          project. I hope that I can continue to learn more complex methods and
          better coding practicers. I wish to aspire to an expert level someday
          and I hope that my beginner projects reflect my excitement for
          learning. Thank you again.
        </p>
      </div>
    </main>
  );
}

export default About;
