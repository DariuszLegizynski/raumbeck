import "./ReasonCard.css"

const ReasonCard = ({title, reasonList}) => {

  const renderedReasons = reasonList.map((reason, id) => {
    return (
      <p key={`${id}${reason}`}>{reason}</p>
    )
  })

	return (
		<article className="reason-card">
			<h3>{title}</h3>
			<section className="reason-card__reasons">
				{renderedReasons}
			</section>
		</article>
	)
}

export default ReasonCard
