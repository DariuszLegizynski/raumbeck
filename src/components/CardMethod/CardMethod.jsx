import "./CardMethod.css"

const CardMethod = ({text1, text2, text3, text4, text5, hr}) => {
	
  
  
  return (
		<li className="card-method">
			{text1 ? <p>{text1}</p> : null}
      {hr ? <hr /> : null}
			{text2 ? <p>{text2}</p> : null}
      {text3 ? <p>{text3}</p> : null}
      {text4 ? <p>{text4}</p> : null}
      {text5 ? <p>{text5}</p> : null}
		</li>
	)
}

export default CardMethod
