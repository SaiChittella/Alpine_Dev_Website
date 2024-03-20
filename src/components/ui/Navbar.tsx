const NavBar = () => {
	return (
		<nav
			className="fixed flex justify-between items-center px-10 py-3 w-full"
			style={{ borderBottom: "1px solid #202320" }}
		>
			<div>
				<a href="/#home" className="font-bold">
					Alpine Dev
				</a>
			</div>

			<div className="flex items-center space-x-16 pr-8">
				<a href="/#mission" className="nav-item">
					Mission
				</a>
				<a href="/#about" className="nav-item">
					About Us
				</a>
				<a href="/#projects" className="nav-item">
					Projects
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
