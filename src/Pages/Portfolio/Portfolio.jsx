import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";

export default function Portfolio() {
  const [imgNumber, setImgNumber] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [modalFlag, setModalFlag] = useState(false);

  useEffect(() => {
    switch (imgNumber) {
      case 1:
        setImgSrc("/imgi_1_poert1.png");
        break;
      case 2:
        setImgSrc("/imgi_2_port2.png");
        break;
      case 3:
        setImgSrc("/imgi_3_port3.png");
        break;
    }
  }, [imgNumber]);

  return (
    <>
      <title>Portfolio</title>
      <section className="portfolio bg-white d-flex justify-content-center align-items-center">
        <div className="container py-4">
          <h2 className="mb-5 h1 fw-bold text-uppercase text-center">
            portfolio component
          </h2>
          <div className="row g-5">
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center overflow-hidden">
              <div
                className="portfolio-card overflow-hidden position-relative rounded-3"
                onClick={() => {
                  setImgNumber(1);
                  setModalFlag(true);
                }}
              >
                <img
                  src="/imgi_1_poert1.png"
                  alt=""
                  className="w-100 d-block"
                />

                <div className="layer position-absolute w-100 h-100 start-0 top-0 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div
                className="portfolio-card overflow-hidden position-relative rounded-3"
                onClick={() => {
                  setImgNumber(2);
                  setModalFlag(true);
                }}
              >
                <img src="/imgi_2_port2.png" alt="" className="w-100 d-block" />
                <div className="layer position-absolute w-100 h-100 start-0 top-0 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div
                className="portfolio-card overflow-hidden position-relative rounded-3"
                onClick={() => {
                  setImgNumber(3);
                  setModalFlag(true);
                }}
              >
                <img src="/imgi_3_port3.png" alt="" className="w-100 d-block" />
                <div className="layer position-absolute w-100 h-100 start-0 top-0 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div
                className="portfolio-card overflow-hidden position-relative rounded-3"
                onClick={() => {
                  setImgNumber(1);
                  setModalFlag(true);
                }}
              >
                <img
                  src="/imgi_1_poert1.png"
                  alt=""
                  className="w-100 d-block"
                />
                <div className="layer position-absolute w-100 h-100 start-0 top-0 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div
                className="portfolio-card overflow-hidden position-relative rounded-3"
                onClick={() => {
                  setImgNumber(2);
                  setModalFlag(true);
                }}
              >
                <img src="/imgi_2_port2.png" alt="" className="w-100 d-block" />
                <div className="layer position-absolute w-100 h-100 start-0 top-0 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div
                className="portfolio-card overflow-hidden position-relative rounded-3"
                onClick={() => {
                  setImgNumber(3);
                  setModalFlag(true);
                }}
              >
                <img src="/imgi_3_port3.png" alt="" className="w-100 d-block" />
                <div className="layer position-absolute w-100 h-100 start-0 top-0 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {imgNumber >= 1 && imgNumber <= 3 && modalFlag === true ? (
          <Modal imgSrc={imgSrc} setModalFlag={setModalFlag} />
        ) : (
          ""
        )}
      </section>
    </>
  );
}
