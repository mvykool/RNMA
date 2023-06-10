/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"

function App() {

  const [post, setPost] = useState([]);

  function getPost(){
    const url = "https://localhost:7265/get-all-posts";

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

  return (
    <div>
      <h1>
        client
      </h1>

    <div>
      <button onClick={getPost}>get posts</button>
      <button>create new post</button>
    </div>

      <table className="table">
        <thead className="col">
          <tr>post id</tr>
          <tr>title</tr>
          <tr>content</tr>
          <tr>crud operation</tr>
        </thead>
        <tbody >
          <tr>
            <th>1</th>
            <td>title</td>
            <td>content</td>
            <td>
              <button type="button">update</button>
              <button type="button">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App

