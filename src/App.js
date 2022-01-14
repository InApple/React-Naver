
// import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import SearchForm from './component/SearchForm';
import IconForm from './component/IconForm';
import BodyForm from './component/BodyForm';

import styled from 'styled-components';
import CardForm from './component/CardForm';


const Root = styled.div`
    background-color: #F4F6F8;
`

function App() {
  return (
    <Root>
          <Header></Header>
          <SearchForm></SearchForm>
          <IconForm></IconForm>
          <CardForm></CardForm> 
          <BodyForm></BodyForm>
          <Footer></Footer>
    </Root>
  );
}

export default App;
