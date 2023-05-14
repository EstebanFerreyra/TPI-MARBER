import React from 'react'

const Carousel = () => {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img src="https://www.ngenespanol.com/wp-content/uploads/2018/08/7-buenas-razones-para-tomar-cerveza.png" className="d-block w-100" alt="..." />          </div>
          <div className="carousel-item">
          <img src="https://cdn.pixabay.com/photo/2014/04/03/10/00/hops-309577_1280.png" className="d-block w-100" alt="..." />
            <img src="https://www.ngenespanol.com/wp-content/uploads/2018/08/7-buenas-razones-para-tomar-cerveza.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://dam.ngenespanol.com/wp-content/uploads/2019/02/islandia-cerveza-3.jpg.imgo_.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
export default Carousel
