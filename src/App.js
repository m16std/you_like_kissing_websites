import React, { useState } from 'react';
import logo from './resources/logo512.png';
import './App.css';
import Counter from './components/Counter.jsx';
import PostList from './components/PostList.jsx';


function App() {
  const [posts, setPosts] = useState([
    {
      id: 1, title: 'ААААААААА!', body: 'AAAA AAA AAA AAAAAA AAA! AAAA! AAAAAAAA! AAAAA! AAAAAAA AAAA AA!!!'
    },
    {
      id: 2, title: 'AAAAAA AAAAAA (A.A.A AAAAAA AAAAAAAA)', body: 'AAAAAAA AA AAA AAAAAAAAA AAAAA AA AAAAAA AAAAAA, AAAAAAA AA AAAAAA AAAAAA, AAAAA AAAAAAA AAA! AA AAA AAAA AAAA AAAAAAAA AAAA AA AAAAAA AAAAA  AAAA AAAA AAAAAA AA AAA!  AAA AAAA AAAA AAA!  AAAAAAA AAAAA AAA!  AAAAA AAAA AAA!  AAAA AAAAA AAA!  AAA AAAAAA «A» AAAA AAA! AAAAA AAA AAA, AAAAAAA AAA AAAA, AA AAAAAA AAAAAA, AAAA AAAAA AAA!'
    },
    {
      id: 3, title: 'AAAAAAAAA!', body: '~ AAAAA AAAAA AAA AAAAAAAAA!'
    }
  ])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Suck my dick
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
        >
          bitch
        </a>

        <Counter />
        <p>
          times
        </p>
        <PostList posts={posts} title="AAAAAAAAAAAAAAAAAAAAAAAA" />
      </header>
    </div>
  );
}

export default App;
