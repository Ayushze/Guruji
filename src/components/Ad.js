import React from "react";

function Ad() {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="https://img.freepik.com/free-psd/fashion-sale-banner-template_23-2148935597.jpg?size=626&ext=jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://img.freepik.com/free-vector/modern-big-sale-banner-background_1361-2479.jpg?size=626&ext=jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://img.freepik.com/free-psd/fashion-sale-banner-template_23-2148935597.jpg?size=626&ext=jpg"
              alt="Third slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://img.freepik.com/free-vector/modern-big-sale-banner-background_1361-2479.jpg?size=626&ext=jpg"
              alt="Forth slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://img.freepik.com/free-psd/fashion-sale-banner-template_23-2148935597.jpg?size=626&ext=jpg"
              alt="Fifth slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

export default Ad;
