import React, { useState } from 'react';
import logo from './resources/logo512.png';
import './App.css';
import Counter from './components/Counter';
import PostList from './components/PostList';
//import MyButton from './components/UI/button/MyButton';
//import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1, title: 'ААААААААА!', body: 'AAAA AAA AAA AAAAAA AAA! AAAA! AAAAAAAA! AAAAA! AAAAAAA AAAA AA!!!'
    },
    {
      id: 2, title: 'AAAAAA AAAAAA (A.A.A AAAAAA AAAAAAAA)', body: 'AAAAAAA AA AAA AAAAAAAAA AAAAA AA AAAAAA AAAAAA, AAAAAAA AA AAAAAA AAAAAA, AAAAA AAAAAAA AAA! AA AAA AAAA AAAA AAAAAAAA AAAA AA AAAAAA AAAAA  AAAA AAAA AAAAAA AA AAA!  AAA AAAA AAAA AAA!  AAAAAAA AAAAA AAA!  AAAAA AAAA AAA!  AAAA AAAAA AAA!  AAA AAAAAA «A» AAAA AAA! AAAAA AAA AAA, AAAAAAA AAA AAAA, AA AAAAAA AAAAAA, AAAA AAAAA AAA!'
    },
    {
      id: 3, title: 'AAAAAA', body: '~ AAAAA AAAAA AAA AAAAAAAAA!'
    },
    {
      id: 4, title: 'AAA! AAAA! AAAA! AAAAAA! AA! AAAA!', body: 'AAAAAAAAAAAAAAAA! AAAAaAAAAAAAaaA AAAAAAAAAAAAAAAAAAAAAaaAAAAAAAAAAAAAAAAAAA! AAAAAAAaaAAAAAAAAAaaAAAA AAAaAAAAAAAAAAaaAAAAAaAAA AAAAAAAAAAAAAAAAAAAAAAAAA! AAAaAAAAAAaaAAAAAA AaAAAAAAAA AaAAAAAAAAAAAAAAAaAAAAAAAA AAAAAAAAAAAAAAAAAAA!'
    },
  ])

  const createPost = (newPost) => {
    posts.push(newPost)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">

      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>
        Suck my dick
      </p>
      <a
        className="App-link"
        href="https://sta.sh/2zavo2kbm76"
      >
        bitch
      </a>

      <Counter />

      <p>
        times
      </p>

      <PostForm create={createPost} />
      <PostList posts={posts} remove={removePost} title="AAAAAAAAAAAAAAAAAAAAAAAA" />

    </div>
  );
}

export default App;
