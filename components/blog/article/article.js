import data from "./static-data.json";
import Blog_details from "./blog_details";
export default function article() {
    return (
      <>
     <article className="blog_item">
        {data.map((info) => {
                  return (
                    <Blog_details
                    src={info.src}
                    h3={info.h3}
                    date={info.date}
                    href={info.href} 
                    h2={info.title} 
                    p={info.paragraphe} 
                    user={info.user} 
                    comments={info.comment}
                    />

                  )})}
  </article>
</>
    )
}