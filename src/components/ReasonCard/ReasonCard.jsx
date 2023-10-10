import "./ReasonCard.css";
import DrawHumanWalkIcon from "../../components/animations/DrawHumanWalk/DrawHumanWalkIcon"
import DrawPflasterIcon from "../../components/animations/DrawPflaster/DrawPflasterIcon"
import DrawHeartShieldIcon from '../../components/animations/DrawHeartShield/DrawHeartShieldIcon'
import DrawHeartFolderIcon from '../../components/animations/DrawHeartFolder/DrawHeartFolderIcon'

const ReasonCard = ({title, reasonList, image}) => {
  const renderedReasons = reasonList.map((reason, id) => {
    return (
      <p className="reason-card__reason" key={`${id}${reason}`}>{reason}</p>
    )
  })

	return (
		<article className="reason-card">
			<section className="reason-card__img">
				<DrawHeartFolderIcon />
				{/* <DrawHeartShieldIcon /> */}
				{/* <DrawPflasterIcon /> */}
				{/* <DrawHumanWalkIcon /> */}
			</section>
			<h3>{title}</h3>
			<section className="reason-card__reasons">
				{renderedReasons}
			</section>
		</article>

	)
}

export default ReasonCard
