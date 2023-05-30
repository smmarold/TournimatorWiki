import Navbar from '../routes/nav';

const Header = () => {
	return (
		<header>
			<div className='nav-area'>
				<a
					href='/'
					className='logo'
				>
					Tournimator
				</a>
				<Navbar />
			</div>
		</header>
	);
};

export default Header;
