import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import film from "./../assets/images/film.png";
import  "./../assets/css/details.css";

const MovieDetails = ({singleData}) => {
    const naviagte = useNavigate()
    useEffect(() => {
    }, [singleData])
    
    const myStyle={
        backgroundImage: 
        `url(${film})`,
        height:'88vh',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const getWithoutPTag = () => {
        const tempElement = document.createElement('div');
        tempElement.innerHTML = singleData.show?.summary;
        const textContent = tempElement.innerText;
        return textContent;
      };
  return <>
  {/* <pre>{JSON.stringify(singleData,null,2)}</pre> */}
   <div style={myStyle} className='main'>
<div className='container middle'>
<div className='row moviedetails'>


    <div className='left-side col-sm-4 col-md-6 '>
    <div className='card img-card'   style={{width: "16rem"}}  >
<img src={singleData.show.image?.original} />
    <p class="cinemas-footer">In cinemas</p>
</div> 
    </div>

    <div className='right-side col-sm-4 col-md-6'>
        <h2 className='file-name'>{singleData.show.name}</h2>
        <div className='d-flex gap-3 mb-4'>

        <span class="badge rounded-pill bg-secondary">{singleData.show.status}</span>
        <a href={singleData.show.officialSite}>
        <span class="badge rounded-pill bg-success">visit site official  </span>
             </a>
        </div>
        <ul className='bullet'>
            <li>timezone: {singleData.show.network.country.timezone}</li>
            <li>Time: {singleData.show.schedule.time}, {singleData.show.schedule?.days}</li>
            <li>Type: {singleData.show.type}</li>
            <li>country: {singleData.show.network.country.name}</li>
            <li>Genres: {singleData.show.genres[0]} {singleData.show.genres[1]} </li>
            <li>language: {singleData.show.language}</li>
            <li>premiered: {singleData.show.premiered}</li>
        </ul>
<button type="button" class="tickets-btn btn btn-lg btn-danger" onClick={e => naviagte("/book-tickets")}>Book Tickets</button>
    </div>
</div>
</div>

      </div>

      <div className='container second-section'>
<h2 className='bold'>About the movie</h2>
<p className='about'>{getWithoutPTag()}</p>
<hr />
      </div>
  </>
}

export default MovieDetails