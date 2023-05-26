import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Carousal() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <div className="item" datatype="1">
      <img
        src="https://www.shutterstock.com/image-vector/guru-cartoon-vector-cap-260nw-1646988574.jpg"
        alt="1"
      />
    </div>,
    <div className="item" datatype="2">
      <img
        src="https://www.shutterstock.com/image-vector/guru-nanak-jayanti-happy-gurpurab-260nw-1539156575.jpg"
        alt="2"
      />
    </div>,
    <div className="item" datatype="3">
      <img
        src="https://www.shutterstock.com/image-vector/guru-cartoon-vector-cap-260nw-1646988574.jpg"
        alt="1"
      />
    </div>,
    <div className="item" datatype="4">
      <img
        src="https://www.shutterstock.com/image-vector/guru-nanak-jayanti-happy-gurpurab-260nw-1539156575.jpg"
        alt="2"
      />
    </div>,
    <div className="item" datatype="5">
      <img
        src="https://www.shutterstock.com/image-vector/guru-cartoon-vector-cap-260nw-1646988574.jpg"
        alt="1"
      />
    </div>,
    <div className="item" datatype="4">
      <img
        src="https://www.shutterstock.com/image-vector/guru-nanak-jayanti-happy-gurpurab-260nw-1539156575.jpg"
        alt="2"
      />
    </div>,
  ];

  return (
    <>
      <div className="crsl">
        <h5 className="GT">USER TESTIMONIAL</h5>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </div>
    </>
  );
}

export default Carousal;
