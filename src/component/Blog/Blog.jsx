import React from "react";
import HeaderBanner from "../HeaderBanner/HeaderBanner";

const Blog = () => {
  return (
    <div className="my-10 ">
          <HeaderBanner> Blog page </HeaderBanner>
      <h1 className="text-center text-3xl font-bold">Question and Answer </h1>
      <div className="blog-info mt-4 mx-4 ">
        <h2 className="text-1xl font-bold my-2">
          1. When should you use context API?{" "}
        </h2>
        <p className="indent-4">
          Context API is a feature of React that allows you to pass data through
          the component tree without having to pass the props manually at every
          level. You can use Context API when you have data that needs to be
          accessed by many components at different levels of the component tree.
          you can use Context API to simplify the data flow in your application
          and make your code more maintainable and easier to read
        </p>
        <h2 className="text-1xl font-bold my-2">2. What is a custom hook? </h2>
        <p className="indent-4">
          In React, a custom hook is a reusable function that allows you to
          extract component logic into a separate function, so that it can be
          reused across multiple components. A custom hook is simply a
          JavaScript function that starts with the word "use" (for example,
          "useFetchData")
        </p>
        <h2 className="text-1xl font-bold my-2">3. What is useRef? </h2>
        <p className="indent-4">
          useRef is a feature in the React JavaScript library that allows
          developers to create a mutable reference to an element or value in a
          React component. It is a way to access and modify an element or value
          without triggering a re-render of the component
        </p>
        <h2 className="text-1xl font-bold mb-2">4. What is useMemo? </h2>
        <p className="indent-4">
          useMemo is a feature in the React JavaScript library that allows
          developers to optimize the performance of their applications by
          memoizing the results of expensive computations. In simpler terms,
          useMemo is a way to store the result of a function and reuse it if the
          inputs to that function have not changed
        </p>
      </div>
    </div>
  );
};

export default Blog;
