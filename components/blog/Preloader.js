export default function Preloader({ children }) {
    
    return (
       <>
       <div id="preloader-active">
            <div className="preloader d-flex align-items-center justify-content-center">
                <div className="preloader-inner position-relative">
                <div className="preloader-circle" />
                <div className="preloader-img pere-text">
                    <img src="assets/img/logo/logo.png" alt />
                </div>
                </div>
            </div>
        </div>
       </>
    )
}