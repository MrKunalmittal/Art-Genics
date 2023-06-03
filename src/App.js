// import logo from './logo.svg';
import './App.css';
import './style/index.css';
import Header  from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Button from "./components/Button";


function App() {

  const images = [
    {
      id: 1001,
      description: 'Mandala Art',
      image: 'https://images.unsplash.com/photo-1664403489326-0591c36be436?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'
    },
    {
      id: 1002,
      description: 'Still Life Painting',
      image: 'https://images.unsplash.com/photo-1619118374026-8fb20195f340?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 1003,
      description: 'Pencil Drawings',
      image: 'https://images.unsplash.com/photo-1644337209811-44c441398910?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80'
    },
    {
      id: 1004,
      description: 'Abstact-Canvas',
      image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    },
  ];

  return (
    <>
      <Header 
      name = 'Art Genics'
      />
      <main>
        <Banner 
        title='Find beauty that tells a story' 
        content='“The emotions are sometimes so strong that I work without knowing it. 
        The strokes come like speech.”
        '
        />
        <Gallery 
        title='Featured Art Works'
        content='Curated collection of works ready for purchase'
        images= {images} 
        />
      </main>
      <Footer text = 'All Rights Reserved. &copy;2023  Art-Genics'/>
    </>
    
  );
}

export default App;
