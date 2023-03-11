import { useState } from 'react'

import { close, logo, menu } from '../assets'

import { navLinks } from '../constants'

const Navbar = () => {
	const [toggle, setToggle] = useState(false)
	return (
		<nav className="w-full flex py-6 justify-between items-center navbar">
			<img src={logo} alt="HooBank logo" className="w-32  h-[32px]" />

			{/* Md: menu */}
			<ul className="list-none sm:flex hidden justify-end items-center flex-1">
				{navLinks.map((navLink, index) => (
					<li
						key={navLink.id}
						className={`font-poppins cursor-pointer text-base text-white ${
							index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
						}`}
					>
						<a href={`#${navLink.id}`}>{navLink.title}</a>
					</li>
				))}
			</ul>

			{/* Mobile menu */}
			<div className="sm:hidden flex flex-1 justify-end items.center">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="w-7 h-7 object-contain"
					onClick={() => setToggle((prevState) => !prevState)}
				/>
			</div>

			<div
				className={`${
					toggle ? 'flex' : 'hidden'
				} p-6 bg-black-gradient absolute top-20 right-20 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
			>
				<ul className="list-none flex-col justify-end items-center flex-1">
					{navLinks.map((navLink, index) => (
						<li
							key={navLink.id}
							className={`font-poppins cursor-pointer text-base text-white ${
								index === navLinks.length - 1 ? 'mb-4' : 'mb-4'
							}`}
						>
							<a href={`#${navLink.id}`}>{navLink.title}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
