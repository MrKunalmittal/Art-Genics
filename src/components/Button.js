
function Button(props) {
    return (
      <button className={props.isPrimary ? 'primary' : 'secondary'}>
          {props.isPrimary ? 'About Us' : 'Explore'}
      </button>
    )
  }
  
  export default Button