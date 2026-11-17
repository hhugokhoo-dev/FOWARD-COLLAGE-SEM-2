import Comment from "./Comment";

export default function Post(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>By {props.author}</p>
      <p>{props.content}</p>
      {props.comments.map((comment, index) => (
        <Comment key={index} text={comment} />
        //key = identifier ,when using .map, we use loop to create multiple , if dont have key react diffucult to know which key is changed
      ))}
    </div>
  );
}
