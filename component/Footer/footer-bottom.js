export default function FooterBottom({ children }) {
    return (
      <>
       {/* footer-bottom aera */}
  <div className="footer-bottom-area">
    <div className="container">
      <div className="footer-border">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="footer-copy-right">
              <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with{" "}
                <i className="ti-heart" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer-menu f-right">
              <ul>
                <li>
                  <a href="#">Terms of use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </>
    )
}