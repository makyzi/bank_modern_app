// Predefined tailwind classes
import styles from './style'

// Components
import {
	Navbar,
	Hero,
	Stats,
	Business,
	Billing,
	CardDeal,
	Testimonials,
	Clients,
	CTA,
	Footer,
} from './components'

const App = () => (
	// Header
	<div className="bg-primary w-full overflow-hidden">
		<div className={`${styles.paddingX} ${styles.flexCenter}`}>
			{/* Navbar */}
			<div className={`${styles.boxWidth}`}>
				<Navbar />
			</div>
		</div>

		{/* Hero section */}
		<div className={`bg-primary ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Hero />
			</div>
		</div>

		{/* Features */}
		<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Stats />
				<Business />
				<Billing />
				<CardDeal />
				<Testimonials />
				<Clients />
				<CTA />
				<Footer />
			</div>
		</div>
	</div>
)

export default App
