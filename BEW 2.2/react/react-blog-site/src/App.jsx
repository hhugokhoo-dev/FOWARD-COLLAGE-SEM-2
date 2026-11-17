import "./App.css";
import Header from "./Header.jsx";
import Post from "./Post.jsx";
import PostList from "./PostList.jsx";

// {object}
// [array]
function App() {
  const posts = [
    {
      title: "My first Blog Post",
      author: "John Doe",
      content: "This is my first Blog Post!🚀✨",
      comments: [
        "Great Post !",
        "Thanks for the sharing ",
        "You are the best  ",
      ],
    },
    {
      title: "My second Blog Post",
      author: "John Dohn",
      content: "This is my second Blog Post!🚀✨",
      comments: [
        "Excellent Post !",
        "Thanks for the editing ",
        "You are the best one  ",
      ],
    },
  ];

  return (
    <div className="App">
      <Header />
      <PostList posts={posts} />
    </div>
  );
}

export default App;

// first edition
// function App() {
//   const postProps= {
//     title:"My first Blog Post",
//     author : "John Doe",
//     content : "This is my first Blog Post!",
//     comments : [
//           "Great Post !",
//           "Thanks for the sharing ",
//           "You are the best  ",
//         ],
//   }
//   return (
//     <div className="App">
//       <Header />
//       <Post
//         title="My first Blog Post"
//         author="John Doe"
//         content="This is my first Blog Post!"
//         comments={[
//           "Great Post !",
//           "Thanks for the sharing ",
//           "You are the best  ",
//         ]}
//       />
//     </div>
//   );
// }

//second edition
// function App() {
//   const postProps = {
//     title: "My first Blog Post",
//     author: "John Doe",
//     content: "This is my first Blog Post!",
//     comments: ["Great Post !", "Thanks for the sharing ", "You are the best  "],
//   };
//   return (
//     <div className="App">
//       <Header />
//       <Post {...postProps} />
//     </div>
//   );
// }
