import React, { useState, useMemo } from 'react';
import logo from './resources/logo512.png';
import qr from './resources/qr-code.gif';
import './App.css';
import Counter from './components/Counter';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyModal from './components/UI/modal/MyModal';

function App() {
  const [posts, setPosts] = useState([
    {
      key: 1, title: 'ААААААААА!', body: 'AAAA AAA AAA AAAAAA AAA! AAAA! AAAAAAAA! AAAAA! AAAAAAA AAAA AA!!!'
    },
    {
      key: 2, title: 'AAAAAA AAAAAA (A.A.A AAAAAA AAAAAAAA)', body: 'AAAAAAA AA AAA AAAAAAAAA AAAAA AA AAAAAA AAAAAA, AAAAAAA AA AAAAAA AAAAAA, AAAAA AAAAAAA AAA! AA AAA AAAA AAAA AAAAAAAA AAAA AA AAAAAA AAAAA  AAAA AAAA AAAAAA AA AAA!  AAA AAAA AAAA AAA!  AAAAAAA AAAAA AAA!  AAAAA AAAA AAA!  AAAA AAAAA AAA!  AAA AAAAAA «A» AAAA AAA! AAAAA AAA AAA, AAAAAAA AAA AAAA, AA AAAAAA AAAAAA, AAAA AAAAA AAA!'
    },
    {
      key: 3, title: 'AAAAAA', body: '~ AAAAA AAAAA AAA AAAAAAAAA!'
    },
    {
      key: 4, title: 'AAA! AAAA! AAAA! AAAAAA! AA! AAAA!', body: 'AAAAAAAAAAAAAAAA! AAAAaAAAAAAAaaA AAAAAAAAAAAAAAAAAAAAAaaAAAAAAAAAAAAAAAAAAA! AAAAAAAaaAAAAAAAAAaaAAAA AAAaAAAAAAAAAAaaAAAAAaAAA AAAAAAAAAAAAAAAAAAAAAAAAA! AAAaAAAAAAaaAAAAAA AaAAAAAAAA AaAAAAAAAAAAAAAAAaAAAAAAAA AAAAAAAAAAAAAAAAAAA!'
    },
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    console.log("blyat")
    if (selectedSort)
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    console.log("blyat")
    return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(search))
  }, [search, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
    console.log("blyat")
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.key !== post.key))
    console.log("blyat")
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    console.log("blyat")
  }

  return (
    <div className="App">

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <p>Suck my dick</p>

      <a className="App-link" href="https://absurdopedia.net/wiki/%D0%90%D0%90%D0%90%D0%90%D0%90%D0%90%D0%90%D0%90%D0%90!">
        bitch
      </a>

      <Counter />

      <p>times</p>

      <MyButton onClick={() => setModal(true)} style={{ margin: '20px' }}>AAAAAAAAAAA</MyButton>

      <hr style={{ margin: '15px', width: '1000px' }} />

      <MyInput type="text" placeholder="AAAAA" value={search} onChange={e => setSearch(e.target.value)} style={{ width: '300px' }} />
      <MySelect sortPosts={sortPosts} />

      <hr style={{ margin: '15px', width: '1000px' }} />

      {sortedAndSearchedPosts.length !== 0
        ? <PostList posts={sortedAndSearchedPosts} remove={removePost} title="AAAAAAAAAAAAAAAAAAAAAAAA" />
        : <p>no aaaaaaaaa</p>
      }

      <hr style={{ margin: '15px', width: '1000px' }} />

      <img src={qr} alt="qr" />
      <p>raccoon & cheese grater co.</p>
      <cite>by sandy</cite>
    </div>
  );
}

export default App;
