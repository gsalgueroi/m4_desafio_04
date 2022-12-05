
import './assets/css/css_base.css';
import { useEffect, useState } from 'react';
import { CardBS } from './component/bs_component_card.jsx';
import Titulo from './component/app_header.jsx';
import Footer from './component/app_footer.jsx';
import CountClicks from './component/app_count_clicks.jsx';

import {buscar_anime_final} from './assets/data/db_and_fetch.jsx';


function App() {
  
  const [animes,setAnimes] = useState([]);
  const [animesFilter,setAnimesFilter] = useState([]);

  useEffect(() => {
    var anime = 'naruto';
    buscar_anime_final(anime, animes, setAnimesFilter);
  }, []);
  
  return (

    <>
      <main className="main_grid">
        <header className="box header">
          <div>
            <span style={{ marginBottom: '5px', fontSize: '1.2rem'}}>
              <Titulo atb={{id:1,color:'white'}} animes={animes} setAnimesFilter={setAnimesFilter}></Titulo>
            </span>
          </div>
        </header>
        
        <section className="box content">
          <div id="list_task" className='display_flex_row'> 
          {
            animesFilter.map(function(anime){ 
              return <CardBS key={anime.id} anime={anime} /> }
            )
          }
          </div>
        </section>

        <footer className="box footer display_flex_row">
          <div>
            <span style={{ marginBottom: '5px', fontSize: '1.2rem'}}>
              <Footer 
                animes={animes} 
                setAnimes={setAnimes} 
                animesFilter={animesFilter} 
                setAnimesFilter={setAnimesFilter}>
              </Footer>
            </span>
          </div>
        </footer>

      </main>
    </>
  );
}

export default App;
