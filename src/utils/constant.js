 export const API_OPTIONS= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer  '+ process.env.REACT_APP_TMDB_KEY
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"

  export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg" 

  export const SUPPORTED_LANGUAGE  = [
    {identifier:'en' ,name:"English"},
    {identifier:'hindi' ,name:"Hindi"},
    {identifier:'spanish' ,name:"Spanish"}


  ]

  export const OPEN_API_KEY=process.env.REACT_APP_OPEN_API_KEY
  

  
