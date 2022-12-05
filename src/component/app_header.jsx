import { NavBS } from './bs_component_nav.jsx';
import '../assets/css/css_base.css';

function Titulo({atb: {id, color },animes, setAnimesFilter}) {
  return (
    <div >
        <NavBS animes={animes} setAnimesFilter={setAnimesFilter}></NavBS>
        {/*<h1 className='display_flex_row' id={`img_${id}`} style={{color:color}}>Anime GS</h1>*/}
    </div>
  );
}

export default Titulo;
