import './styles.css';
import { menuItems } from './menu_items/menuIitems';
import MenuItems from '../components/MenuItems';

export default function Navbar() {
	return (
		<nav className='nav'>
			<nav>
				<ul className='menus'>
					{menuItems.map((menu, index) => {
						return (
							<MenuItems
								items={menu}
								key={index}
							/>
						);
					})}
				</ul>
			</nav>
		</nav>
	);
}
