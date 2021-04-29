import React, { useState } from 'react';
import './App.css';

function Food(props) {
  const [likes, setLikes] = useState(0);
  const [selfCount, setSelfCount] = useState(1);
  
  const makeIndexArray = (len) => {
    const indices = [];
    for(var i = 0; i < len; i++) indices.push(i);
    return indices;
  }
  // single tags like take the form of <tagName/>
  return (
    <>
      {makeIndexArray(selfCount).map((index) => {
        return (
          <div className='Food' id={props.name}>
            {props.name}<br/>{likes} likes<br/>
            <button class='likeBtn' onClick={() => setLikes(likes + 1)}>Like Me</button>
            <br/>
            <button class='rmBtn' onClick={() => setSelfCount(selfCount - 1)}>Remove Me</button>
            <br/>
            <button class='dupBtn' onClick={() =>setSelfCount(selfCount + 1)}>Duplicate Me</button>
          </div>
        )
      })}
    </>
  );
}

function App() {
  const [foods] = useState(['Donkatsu', 'Curry', 'Hamburger']);
  // <> called fragment aka grouping bunch of tags in a group
  return (
    <div className="App">
      <header className="App-header">
        {
          foods.map((food) => <>
          <Food key={food} name={food}/>
          <br/>
          </>
          )
        }
      </header>
    </div>
  );
}

export default App;
