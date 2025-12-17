export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container-fluid py-5">
          <div className="row g-sm-3 g-md-0">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="py-5">
                <div className="text-center">
                  <h3 className="my-2 text-white text-uppercase">location</h3>
                  <span className="d-block my-2 text-white">
                    2215 John Daniel Drive
                  </span>
                  <span className="d-block my-2 text-white">
                    Clark, MO 65243
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="py-5">
                <div className="text-center">
                  <h3 className="my-2 text-white text-uppercase">
                    around the web
                  </h3>
                  <div></div>
                  <ul className="list-unstyled text-white mt-3 d-flex justify-content-center gap-4">
                    <li>
                      <i className="fa-brands fa-facebook"></i>
                    </li>
                    <li>
                      <i className="fa-brands fa-twitter"></i>
                    </li>
                    <li>
                      <i className="fa-brands fa-linkedin-in"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-globe"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="py-5">
                <div className="text-center">
                  <h3 className="my-2 text-white text-uppercase">
                    about freelancer
                  </h3>
                  <p className="text-white m-0">
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright py-4 text-center text-white fw-light">
          Copyright © Your Website 2021
        </div>
      </div>
    </>
  );
}
