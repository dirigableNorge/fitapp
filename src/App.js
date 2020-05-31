import React from 'react';
import Header from './components/header.jsx';
import Main from './components/main.jsx';
import Footer from './components/footer.jsx';

function App() {
  console.log('app');
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
