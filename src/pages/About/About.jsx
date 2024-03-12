import IconItem from "../../assets/icons/icons"

import "./About.css"

import { useState } from 'react'

const About = () => {
	const [clickedItem, setClickedItem] = useState(1)

	const handleItemClick = (item) => {
    setClickedItem(item)
  }

	return (
		<article className="about">
      <h1>Über mich</h1>
			<img width="300px" height="400px"></img>
			<section className='about__text'>
				<div>
					<h2>Anna Mehr</h2>
					<h3>Dipl. Physiotherapeutin</h3>
					<h3>&nbsp;</h3>
					<h3>Schwerpunkt:</h3>
					<h3>Gynäkologie, Urologie & Proktologie</h3>
				</div>
				<section className='about__title'>
					<ul>
						<li onClick={() => handleItemClick(1)}>
							<IconItem
								type='book'
								width="2rem"
								height="2rem"
							/>
							<h3>
								MEINE GESCHICHTE
							</h3>
						</li>
						<li onClick={() => handleItemClick(2)}>
							<IconItem
								type='knowledge'
								width="2.4rem"
								height="2.4rem"
								fillColor="none"
								strokeColor='#000000'
							/>
							<h3>
								WEITERBILDUNG
							</h3>
						</li>
						<li onClick={() => handleItemClick(3)}>
							<IconItem
								type='job'
								width="2rem"
								height="2rem"
								strokeColor="#000000"
								fillColor="#000000"
							/>
							<h3>
								BERUFLICHES
							</h3>
						</li>
					</ul>
				</section>
				{clickedItem === 1 ? (
				<section className='about__story'>
					<span>Durch mein großes Interesse im gynäkologischen, urologischen & proktologischen Bereich begann ich mich ausgiebig für die physiotherapeutische Tätigkeit in diesem Zusammenhang zu beschäftigen. Dabei bekam ich die Möglichkeit, in darauf spezialisierten Praxen tätig zu sein und somit viel Erfahrung mit Patienten sowie im Austausch mit Arbeitskollegen und Ärzten sammeln zu dürfen. Für mich wurde das Thema zur sinnstiftenden Passion.</span>
					<p>&nbsp;</p>
					<span>Im Juni 2021 durfte ich durch die Geburt meines Sohnes selbst eigene Erfahrungen im Muttersein sammeln und freue mich seit August 2022 wieder als Physiotherapeutin tätig zu sein.</span>
				</section>) : null}
				{clickedItem === 2 ? (
				<section className='about__experience'>
					<h3>2009 – 2017</h3>
					<span>Re.praxis für Physiotherapie, Schwerpunkt: Gynäkologie, Urologie & Proktologie</span>
					<h3>2011 – 2017</h3>
					<span>Physiotherapie Meusburger, Schwerpunkt: Triggerpunkttherapie</span>
					<h3>2017 – 2021</h3>
					<span>Physiotherapie Praxis Frauensache & Männerthemen, Schwerpunkt: Gynäkologie, Urologie & Proktologie</span>
				</section>) : null}
				{clickedItem === 3 ? (
				<section className='about__work'>
				<h3>Weiterbildungen mit Schwerpunkt Beckenbodentherapie:</h3>
				<div>
				<p>Mai 2023</p>

<span>Beckenboden Special – Vulvodynie I & II</span>
				</div>
					
					<div>
					<p>Jänner 2023</p>

<span>Viszerale Therapie – Läsionskette Verdauungstrakt – Wirbelsäule</span>
					</div>
					
					<div>
					<p>November 2022</p>

					<span>Beckenboden Special – Echtzeit Ultraschall in der Beckenbodentherapie beim Mann</span>
					</div>

					<div>
					<p>Oktober 2020</p>

					<span>Beckenboden Special – Das hintere Kompartiment</span>
					</div>

					<div>
					<p>September 2020</p>

<span>Beckenboden Special – Vaginale Palpation Therapie</span>
					</div>
					
					<div>
					<p>August 2020</p>

<span>Echtzeit-Ultraschallkurs in der Beckenbodentherapie</span>
					</div>
					
					<div>
					<p>Dezember 2019</p>

<span>Geburt, Wochenbett, Evidenz</span>
					</div>
					
					<div>
					<p>Juni 2019</p>

<span>SKENAR-Technologie – Basis-Seminar</span>
					</div>
					
					<div>
					<p>April 2019</p>

<span>Physiotherapie bei Kindern mit anorektalen und urogenitalen Funktionsstörungen</span>

					</div>
					
					<div>
					<p>Oktober 2017</p>
					<span>Das Prostatakarzinom – Physiotherapeutische Behandlungsmöglichkeiten</span>
					</div>
					<div>
						<p>Mai 2017</p>
						<span>Echtzeit-Ultraschallkurs in der Beckenbodentherapie</span>
					</div>
					<div>
						<p>Januar 2017</p>
						<span>Echtzeit-Ultraschall im Bereich Becken und Lendenwirbelsäule</span>
					</div>
					<div>
						<p>April 2014</p>
						<span>Physiotherapie bei anorektalen Dysfunktionen</span>
					</div>
					<div>
						<p>November 2013</p>
						<span>Grundlagen der Ernährung für eine optimierte physiotherapeutische Behandlung</span>
					</div>
					<div>
						<p>September 2011</p>
						<span>Nach der Geburt – Wochenbett und Rückbildung – Heller Konzept</span>
					</div>
					<div>
						<p>März 2011</p>
						<span>Beckenbodenrehabilitation beim Mann</span>
					</div>
					<div>
						<p>November 2010</p>
						<span>Beckenbodenfunktionen und -dysfunktionen, Physiotherapie nach dem Heller-Konzept</span>
					</div>
					<div>
						<p>September 2010</p>
						<span>Chronische Beckenboden und Unterleibsbeschwerden</span>
					</div>
					<div>
						<p>Mai 2009</p>
						<span>Weiterbildungen mit Schwerpunkt Triggerpunkttherapie</span>
					</div>
					<div>
						<p>Oktober 2012</p>
						<span>Manuelle Triggerpunkttherapie MTP3</span>
					</div>
					<div>
						<p>November 2011</p>
						<span>Manuelle Triggerpunkt-Therapie MTP2</span>
					</div>
					<div>
						<p>Mai 2011</p>
						<span>Manuelle Triggerpunkt-Therapie MTP1</span>
						
					</div>
					<h3>Weiterbildungen mit Schwerpunkt Manualtherapie</h3>
					<div>
						<p>Oktober 2010</p>
						<span>Manuelle Therapie, Prüfungsvorbereitungskurs mit abschließender Prüfung zur Manualtherapeutin</span>
					</div>
					<div>
						<p>Februar 2010</p>
						<span>Manuelle Therapie, Aufbaukurs Hals-Brustwirbelsäule-Arm-Bereich</span>
					</div>
					<div>
						<p>Oktober 2009</p>
						<span>Manuelle Therapie, Aufbaukurs Lenden-Becken-Bein-Bereich</span>
					</div>	
					<div>
						<p>März 2009</p>
						<span>Manuelle Therapie, Weichteil-Kurs</span>
					</div>
					<div>
						<p>November 2008</p>
						<span>Manuelle Therapie, Wirbelsäulen Kurs</span>
					</div>
					<div>
						<p>Juni 2008</p>
						<span>Manuelle Therapie, Extremitäten Kurs</span>
					</div>
					<div>
						<p>November 2008</p>
						<span>Kinesiology, Power Spiral Taping</span>
					</div>
					<div>
						<h3>Weiterbildungen mit Schwerpunkt Lymphdrainagetherapie</h3>
						<p>Oktober 2007</p>
						<span>Manuelle Lymphdrainage nach Dr. Vodder</span>
					</div>
					
				</section>) : null}
			</section>
			
		</article>
	)
}

export default About
