import React, { Component } from "react";
import './Style.css';

class Jsonplaceholderscrud extends Component {
  state = {
    posts: [],
    postToEdit: [],
    inputFirst: "",
    inputLast: "",
  };
  componentDidMount() {
    this.getPosts()
  }
  getPosts=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      this.setState({ posts });
    });
 
  }

  render() {
    const { posts, postToEdit, inputFirst, inputLast } = this.state;
    const postsElement = posts.map((post) => (
      <tr key={post.id}>
           <td> {post.userId} </td>
        <td> {post.id} </td>
        <td> {post.title} </td>
        <td> {post.body} </td>
           
       <td>
          <button
            onClick={() => {
              const newPosts = posts.filter((item) => item.id !== post.id);
              this.setState({ posts: newPosts });
            }}
          >
            Delete
          </button>
        </td>
        <td>
          {" "}
          <button
            onClick={() => {
              this.setState({ postToEdit: post });
            }}
          >
            Edit
          </button>
        </td>
      </tr>
    ));
    return (
      <div className="Jsonplaceholderscrud">
        <div>
      body
          <input
            onChange={(evt) => {
              this.setState({ postToEdit: {...postToEdit, body: evt.target.value} });
            }}
            value={postToEdit.body}
          />
          <br />
          title
          <input
            onChange={(evt) => {
              this.setState({ postToEdit: {...postToEdit, title: evt.target.value}});
            }}
            value={postToEdit.title}
          />
          <br />
          <button
            onClick={() => {
              let editpost = posts.find((it) => it.id === postToEdit.id);
              editpost.body = this.state.postToEdit.body;
              editpost.title = this.state.postToEdit.title;
              this.setState({ posts });
            }}
          >
            Update
          </button>
        </div>
        <table>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
          {postsElement}
        </table>
      </div>
    );
  }
}

export default Jsonplaceholderscrud;
