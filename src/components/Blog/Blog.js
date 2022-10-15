import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className="blog_area">
                <h2>What is the purpose of React Router?</h2>
                <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className="blog_area">
                <h2>How does context API works?</h2>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className="blog_area">
                <h2>Define useRef</h2>
                <p>The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. </p>
            </div>
        </div>
    );
};

export default Blog;