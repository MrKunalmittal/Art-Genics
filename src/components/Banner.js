import Button from "./Button"

function Banner(props) {
  let isPrimary = true;
  return (
    <section className="banner">
    <div className="container">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <div className="buttons">
              <Button isPrimary={isPrimary} />
              <Button />
            </div>
       
    </div>
</section>
  )
}

export default Banner