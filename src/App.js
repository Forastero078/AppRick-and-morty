import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form.jsx';
import { useLocation } from 'react-router-dom';
import { Favorites } from './components/Favorites/Favorites';
import { store } from '../src/redux/store/store'
import { addCard, deleteCard } from './redux/actions/actions';
import Footer from './components/Footer/Footer';
import { Link } from 'react-router-dom';
import { frasesHome } from './frasesHome';






function App() {
  const [cards, setCards] = useState([]);
  const [access, setAccess] = useState(false)
  const location = useLocation();

  const username = 'app-rick-y-morty@carofiglio.com'
  const password = 'henry1234'

  const navig = useNavigate();

  useEffect(() => {
    !access && navig('/')
  }, [access])

  const login = (input) => {
    if (input.username === username && input.password === password) {
      setAccess(true);
      navig('/home');
    }
  }

  const onSearch = () => {
    const inputId = document.querySelector('inpuT');
    fetch(`https://rickandmortyapi.com/api/character/${inputId.value}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCards((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onSearchR = () => {
    const inputId = Math.floor(Math.random() * 826)
    fetch(`https://rickandmortyapi.com/api/character/${inputId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCards((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = (id) => {
    setCards(cards.filter((e) => e.id !== id))
  }


  const alAzar = (array) => {
    let random = Math.floor(Math.random() * (array.length - 1))

    return array[random];
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div className='Nav'>
        {location.pathname !== '/' && <Nav onS={onSearch} onSR={onSearchR} log={() => setAccess(false)} />}
      </div>
      <hr />
      <div className='Cards'>
        <Routes>
          <Route exact path='/' element={<Form Submit={login} />} />
          <Route path='/home' element={cards.length > 0 ? (<Cards characters={cards} onClose={onClose} add={addCard} delete={deleteCard} />) : (<Link style={{textDecoration: 'none'}} to='/home'><h1 className='titulo'>{alAzar(frasesHome)}</h1></Link>)} />
          <Route exact path='/about' element={<About />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/favorites' element={store.getState().myFavorites.length > 0 ? (<Favorites store={store} add={addCard} delete={deleteCard} />) : (<h1 className='titulo'>¡Agrega personajes a Favoritos!</h1>)} />

        </Routes>
      </div>
      <hr />
      <Footer />
    </div>
  )
}

export default App
