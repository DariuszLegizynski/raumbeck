import "./ReasonCard.css";
import DrawHumanWalkIcon from "../../components/animations/DrawHumanWalkIcon.jsx";

const ReasonCard = ({title, reasonList, image}) => {
  const renderedReasons = reasonList.map((reason, id) => {
    return (
      <p className="reason-card__reason" key={`${id}${reason}`}>{reason}</p>
    )
  })

	return (
		<article className="reason-card">
			<section className="reason-card__img">
				<DrawHumanWalkIcon />
			</section>
			<h3>{title}</h3>
			<section className="reason-card__reasons">
				{renderedReasons}
			</section>
		</article>

	)
}

export default ReasonCard
