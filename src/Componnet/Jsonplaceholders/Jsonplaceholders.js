import React from 'react';
class Jsonplaceholders extends React.Component {
state={url:[],id:"",title:""}
componentDidMount=()=>{
this.getPost()
}


    getPost = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            return response.json();
          })
        //   the data=posts
          .then((data) => {
            console.log(data);
            // in order that the empty array posts wil reccive the data from the jsonplaceholders
            this.setState({ url: data }) 
          })
          .catch((err) => {
            console.log(err);
          });
      };
      render() {
      return (
        <div>
            {/* in order to reccive the data that fro json */}
  
  
  {/* here we map the data that now is the url that contains the post */}
          {this.state.url.map((post,i) => ( 
            <div key={post.id}>
          <h1>{i+1}. {post.title}</h1>
           <h2> {post.body}</h2>
           <p>{post.description}</p>
            </div>
          ))}
          
        
        </div>
        
      )
    }}
  
 
export default Jsonplaceholders ;