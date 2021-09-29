const BlogDetails = ({
    h2,
    p,
    user,
    href,
    comments,
    src,
    h3,
    date
  }) => {
    return (
      <>
      <div className="blog_item_img">
            <img
                className="card-img rounded-0"
                src={src}
                alt=""
            />
            <a href="#" className="blog_item_date">
                <h3>{h3}</h3>
                <p>{date}</p>
            </a>
        </div>
        <div className="blog_details">
          <a className="d-inline-block" href={href}>
          <h2>{h2}</h2>
          </a>
         
          <p>{p}</p>
          <ul className="blog-info-link">
                <li>
                <a href="#">
                    <i className="fa fa-user"></i>{user}
                </a>
              
                </li>
                <li>
                    <a href="#">
                    <i className="fa fa-comments"></i>{comments}
                    </a>
                </li>
            </ul>
        </div>
       
      </>
    );
  };
  
  export default BlogDetails;