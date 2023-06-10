/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import Constants from "./utilities/Constants";
import PostCreateForm from "./components/PostCreateForm";

function App() {

  const [posts, setPost] = useState([]);
  const[showing, setShowing] = useState(false);

  function getPost(){
    const url = Constants.API_URL_GET_ALL_POSTS;

    fetch(url, {
      method: "GET",
    })
    .then((res:any) => res.json())
    .then((postFromServer : any) => {
      console.log(postFromServer);
      setPost(postFromServer)
    })
    .catch((err:any) => console.log(err));
  }


const handleShow  = () => {
  setShowing(true);
}

  return (
    <div>
      <h1>
        client
      </h1>

    <div>
      <button onClick={getPost}>get posts</button>
      <button  onClick={handleShow}>create new post</button>
    </div>
    {posts.length > 0 && 
    
    <table className="table">
    <thead className="col">
      <tr>post id</tr>
      <tr>title</tr>
      <tr>content</tr>
      <tr>crud operation</tr>
    </thead>
    <tbody >
      {posts.map((post: any) => (
        <tr key={post.postId}>
        <th>{post.postId}</th>
        <td>{post.title}</td>
        <td>{post.content}</td>
        <td>
          <button type="button">update</button>
          <button type="button">delete</button>
        </td>
      </tr>
      ))}
    </tbody>
  </table>
    }

    {showing && <PostCreateForm/>}

    </div>
  )
}

export default App

