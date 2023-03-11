import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
	<section className={`${layout.section}`}>
		<div className={`${layout.sectionInfo}`}>
			<h2 className={`${styles.heading2}`}>
				Find a better card deal <br className="hidden sm:block" /> in a
				few easy steps
			</h2>
			<p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
				iste praesentium asperiores dolore quod quidem? Veniam omnis a
				repellendus corrupti earum totam, libero similique aspernatur!
				Excepturi, quis! Autem, nulla aut.
			</p>
			<Button styles="mt-10" />
		</div>

		<div className={`${layout.sectionImg}`}>
			<img src={card} alt="card" className="w-[100%] h-[100%]" />
		</div>
	</section>
)

export default CardDeal
