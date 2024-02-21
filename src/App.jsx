import React from 'react';

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}



export default function App() {
  return (
    <div>
      <Navbar/>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage/>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

function Navbar(){

  return(
<ul>
    <li>
      <a href="default.asp">Home</a>
    </li>
    <li>
      <a href="news.asp">News</a>
    </li>
    <li>
      <a href="contact.asp">Contact</a>
    </li>
    <li>
      <a href="about.asp">About</a>
    </li>
  </ul>

  );
}

