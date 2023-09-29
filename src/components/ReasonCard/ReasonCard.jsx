import "./ReasonCard.css"

const ReasonCard = ({title, reasonList, image}) => {
  const renderedReasons = reasonList.map((reason, id) => {
    return (
      <p className="reason-card__reason" key={`${id}${reason}`}>{reason}</p>
    )
  })

	return (
		<article className="reason-card">
			<section>
				<img className="reason-card__img" src={image} alt={`health issue`} />
			</section>
			<h3>{title}</h3>
			<section className="reason-card__reasons">
				{renderedReasons}
			</section>
		</article>
	)
}

export default ReasonCard
