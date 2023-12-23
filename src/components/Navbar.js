import React, {useRef} from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<FontAwesomeIcon className='fa-robot' icon={faRobot}/>
			<nav ref={navRef}>
				<a href="/#AboutMe">Home</a>
				<a href="/#Education">Education</a>
				<a href="/#Skills">Skills</a>
				<a href="/#Projects">Projects</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FontAwesomeIcon icon={faXmark} />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FontAwesomeIcon icon={faBars} />
			</button>
		</header>
	);
}

export default Navbar;