function Gallery(props) {
    
    return (
      <section className="gallery">
        <div className="container">
              <h2 className="gallery-title">{props.title}</h2>
              <p className="gallery-content">{props.content}</p>
              <div className="gallery-images">
                {props.images.map(image => (
                  <div className="card">
                    <figure key={image.id}>
                      <img className="gallery-image" src={image.image}  alt="Drawings"/>
                    </figure>
                    <p className="gallery-description">{image.description}</p>
                  </div>
                ))}
              </div>
              
          </div>
      </section>
    )
  }
  
  export default Gallery