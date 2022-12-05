


const col_desc = 'Descripcion random de que pongo solo porque si';
export const col_img = 'https://getwallpapers.com/wallpaper/full/3/e/2/23399.jpg';
export const url_fetch = 'https://api.jikan.moe/v4/anime';

export const db = [
    { id: 1, name: 'Colaborador 01', src: col_img, desc1:'', desc2:'',info: '', emision: 'email01@latam.cl' },
    { id: 2, name: 'Colaborador 02', src: col_img, desc1:'', desc2:'',info: '', emision: 'email02@latam.cl' },
    { id: 3, name: 'Colaborador 03', src: col_img, desc1:'', desc2:'',info: '', emision: 'email03@latam.cl' }
]


export const getJsonFromUrl = async (anime_buscado) => {
    try{
        const res = await fetch(`${url_fetch}?q=${anime_buscado}&page=1`);
        const json = res.json();
        return json;
    }catch(e){
        alert(e);
        return 'error';
    }
}

export const buscar_anime_final = async (anime_buscado, animes, setAnimesFilter) =>{
    var resp = await getJsonFromUrl(anime_buscado);
    if( resp =='error' ){
      //alert('Error de Conexion con API de monedas');
      return 0;
    }else{
      try{
        var animesFiltrados = [...animes];
        resp.data.map(function(e){
          let obj = { 
              id: e.mal_id,  
              name: e.title,  
              src: e.images.jpg.image_url,  
              info:e.url, 
              desc: e.synopsis, 
              year: e.year,
              episodes: e.episodes, 
              emision: e.status  }
          
          animesFiltrados.push(obj);
        });
        animesFiltrados.sort(function (a, b) {
          if (a.name < b.name) { return -1; }
          if (a.name > b.name) { return 1; }
          return 0;
        });
        setAnimesFilter(animesFiltrados);

      }catch(e){
        //alert('Error En valores obtenidos:'+e);
        return 0;
      }
    }
  }

 