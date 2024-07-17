import "./ReasonCard.css"
import DrawUrinaryIncontinence from "../animations/DrawUrinaryIncontinence/DrawUrinaryIncontinenceIcon.jsx"
import DrawPregnancyIcon from "../animations/DrawPregnancy/DrawPregnancyIcon.jsx"
import DrawPostOpIcon from "../animations/DrawPostOp/DrawPostOpIcon.jsx"
import DrawSexualHealthIcon from "../../components/animations/DrawSexualHealth/DrawSexualHealthIcon.jsx"

const ReasonCard = ({ title, reasonList, image }) => {
	const renderedReasons = reasonList.map((reason, id) => {
		return (
			<p className="reason-card__reason" key={`${id}${reason}`}>
				{reason}
			</p>
		)
	})

	return (
		<article className="reason-card">
			<section className="reason-card__img">
				{image === "urinaryIncontinence" && <DrawUrinaryIncontinence />}
				{image === "postOp" && <DrawPostOpIcon />}
				{image === "pregnancy" && <DrawPregnancyIcon />}
				{image === "sexual-health" && <DrawSexualHealthIcon />}
			</section>
			<h3>{title}</h3>
			<section className="reason-card__reasons">{renderedReasons}</section>
		</article>
	)
}

export default ReasonCard
