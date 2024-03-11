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
						<li><h3 onClick={() => handleItemClick(1)}>MEINE GESCHICHTE</h3></li>
						<li><h3 onClick={() => handleItemClick(2)}>WEITERBILDUNG</h3></li>
						<li><h3 onClick={() => handleItemClick(3)}>BERUFLICHES</h3></li>
					</ul>
				</section>
				{clickedItem === 1 ? (<section className='about__story'>
					<span>Durch mein großes Interesse im gynäkologischen, urologischen & proktologischen Bereich begann ich mich ausgiebig für die physiotherapeutische Tätigkeit in diesem Zusammenhang zu beschäftigen. Dabei bekam ich die Möglichkeit, in darauf spezialisierten Praxen tätig zu sein und somit viel Erfahrung mit Patienten sowie im Austausch mit Arbeitskollegen und Ärzten sammeln zu dürfen. Für mich wurde das Thema zur sinnstiftenden Passion.</span>
					<p>&nbsp;</p>
					<span>Im Juni 2021 durfte ich durch die Geburt meines Sohnes selbst eigene Erfahrungen im Muttersein sammeln und freue mich seit August 2022 wieder als Physiotherapeutin tätig zu sein.</span>
				</section>) : null}
				{clickedItem === 2 ? (<section className='about__experience'>
					<h3>2009 – 2017</h3>
					<span>Re.praxis für Physiotherapie, Schwerpunkt: Gynäkologie, Urologie & Proktologie</span>
					<h3>2011 – 2017</h3>
					<span>Physiotherapie Meusburger, Schwerpunkt: Triggerpunkttherapie</span>
					<h3>2017 – 2021</h3>
					<span>Physiotherapie Praxis Frauensache & Männerthemen, Schwerpunkt: Gynäkologie, Urologie & Proktologie</span>
				</section>) : null}
				{clickedItem === 3 ? (<section className='about__work'>
				<h3>Weiterbildungen mit Schwerpunkt Beckenbodentherapie:</h3>
<p>Mai 2023</p>

<span>Beckenboden Special – Vulvodynie I & II</span>
Jänner 2023

Viszerale Therapie – Läsionskette Verdauungstrakt – Wirbelsäule
November 2022 

Beckenboden Special – Echtzeit Ultraschall in der Beckenbodentherapie beim Mann
Oktober 2020 

Beckenboden Special – Das hintere Kompartiment
September 2020

Beckenboden Special – Vaginale Palpation Therapie
August 2020

Echtzeit-Ultraschallkurs in der Beckenbodentherapie
Dezember 2019

Geburt, Wochenbett, Evidenz
Juni 2019                                  

SKENAR-Technologie – Basis-Seminar
April 2019

Physiotherapie bei Kindern mit anorektalen und urogenitalen Funktionsstörungen
Oktober 2017

Das Prostatakarzinom – Physiotherapeutische Behandlungsmöglichkeiten
Mai 2017

Echtzeit-Ultraschallkurs in der Beckenbodentherapie
Januar 2017

Echtzeit-Ultraschall im Bereich Becken und Lendenwirbelsäule
April 2014

Physiotherapie bei anorektalen Dysfunktionen
November 2013

Grundlagen der Ernährung für eine optimierte physiotherapeutische Behandlung
September 2011

Nach der Geburt – Wochenbett und Rückbildung – Heller Konzept
März 2011

Beckenbodenrehabilitation beim Mann
November 2010

Beckenbodenfunktionen und -dysfunktionen, Physiotherapie nach dem Heller-Konzept
September 2010 

Chronische Beckenboden und Unterleibsbeschwerden
Mai 2009

Weiterbildungen mit Schwerpunkt Triggerpunkttherapie
Oktober 2012

Manuelle Triggerpunkttherapie MTP3
November 2011

Manuelle Triggerpunkt-Therapie MTP2
Mai 2011

Manuelle Triggerpunkt-Therapie MTP1
Weiterbildungen mit Schwerpunkt Manualtherapie

Oktober 2010

Manuelle Therapie, Prüfungsvorbereitungskurs mit abschließender Prüfung zur Manualtherapeutin
Februar 2010

Manuelle Therapie, Aufbaukurs Hals-Brustwirbelsäule-Arm-Bereich
Oktober 2009

Manuelle Therapie, Aufbaukurs Lenden-Becken-Bein-Bereich
März 2009

Manuelle Therapie, Weichteil-Kurs
November 2008

Manuelle Therapie, Wirbelsäulen Kurs
Juni 2008

Manuelle Therapie, Extremitäten Kurs
November 2008

Kinesiology, Power Spiral Taping
Weiterbildungen mit Schwerpunkt Lymphdrainagetherapie

Oktober 2007

Manuelle Lymphdrainage nach Dr. Vodder
				</section>) : null}
			</section>
			
		</article>
	)
}

export default About
