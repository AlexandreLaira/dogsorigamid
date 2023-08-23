import React from 'react'

function UseMedia(media) {
  const [match, setMatch] = React.useState(null);

  function changeMatch( ){
    const {matches} = window.matchMedia(media);
    setMatch(matches)
  }

  React.useEffect(()=>{
    changeMatch();
    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch)
    }
  }, [media]);

  
  return match

}

export default UseMedia
