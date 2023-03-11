import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => (
	<section
		id="clients"
		className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
	>
		<div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

		<div className="w-full relative z-1 mb:6 sm:mb-16 justify-between items-center flex flex-col md:flex-row">
			<h2 className={`${styles.heading2}`}>
				What people are <br className="hidden sm:block" /> saying about
				us
			</h2>
			<div className="w-full mt-6 md:mt-0">
				<p className={`${styles.paragraph} text-left max-w-[450px]`}>
					Everything you need to accept card payments and grow your
					businness everywhere on the planet.
				</p>
			</div>
		</div>

		<div className="flex flex-wrap justify-center sm:justify-start w-full feedback-container relative z-1">
			{feedback.map((card) => (
				<FeedbackCard key={card.id} {...card} />
			))}
		</div>
	</section>
)

export default Testimonials
