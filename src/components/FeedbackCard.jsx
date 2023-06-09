import { quotes } from '../assets'

const FeedbackCard = ({ content, name, title, img }) => (
	<div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] mr-0 sm:mr-5 md:mr-10 my-5 feedback-card">
		<img
			src={quotes}
			alt="double quotes icon"
			className="w-[42px] h-[27px] object-contain"
		/>

		<p className="font-poppins font-normal text-base leading-[32px] text-white my-10">
			{content}
		</p>

		<div className="flex flex-row">
			<img
				src={img}
				alt={name}
				className="w-[48px] h-[48px] rounded-full"
			/>
			<div className="flex flex-col ml-4">
				<h4 className="font-poppins leading-[32px] font-semibold text-white text-lg">
					{name}
				</h4>
				<p className="font-poppins font-normal leading-[24px] text-dimWhite">
					{title}
				</p>
			</div>
		</div>
	</div>
)

export default FeedbackCard
