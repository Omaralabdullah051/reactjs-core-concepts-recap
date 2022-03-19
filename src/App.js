import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <District name="Durjoy" special="Actor"></District>
      <District name="Murjoy" special="Factor"></District>
      <District name="Surjoy" special="Vector"></District>
      <LoadPosts></LoadPosts>
    </div>
  );
}

function LoadPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div>
      <h1>Post: {posts.length}</h1>
      {
        posts.map(post => <Post post={post} key={post.id}></Post>)
      }
    </div>
  )
}



function Post(props) {
  const { id, title, body } = props.post;
  return (
    <div style={{ backgroundColor: 'beige', margin: '20px', padding: '20px', border: '3px solid red', borderRadius: '20px' }}>
      <h1>Id: {id}</h1>
      <h3>Title: {title}</h3>
      <p>Body: {body}</p>
    </div>
  )
}

const districtStyle = {
  backgroundColor: 'bisque',
  margin: '20px',
  border: '2px solid red',
  borderRadius: '20px',
  padding: '20px',
}

// function District(props) {
//   const [power, setPower] = useState(1);
//   const handleBoost = () => setPower(power * 2);
//   return (
//     <div style={districtStyle}>
//       <h2>Name: {props.name}</h2>
//       <p>Specialty: {props.special}</p>
//       <h4>Power:{power}</h4>
//       <button onClick={handleBoost}>Boost The Power</button>
//     </div>
//   )
// }

class District extends React.Component {
  constructor(props) {
    super(props);
    this.state = { power: 1 };
  }

  // handleBoost = () => {
  //   this.setState({ power: this.state.power * 2 });
  // }
  //or
  //standard way to update the previous state
  handleBoost = () => {
    this.setState((prevState) => ({ power: prevState.power * 2 }))
  };

  render() {
    return (
      <div style={districtStyle}>
        <h2>Name: {this.props.name}</h2>
        <p>Specialty: {this.props.special}</p>
        <h4>Power: {this.state.power}</h4>
        <button onClick={this.handleBoost}>Boost The Power</button>
      </div >
    )
  }
}


export default App;
