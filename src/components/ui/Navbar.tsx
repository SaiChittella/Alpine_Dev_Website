const NavBar = () => {
	return (
		<nav
			className="fixed flex justify-between items-center px-14 py-4 w-full rounded-b-lg"
			style={{ borderBottom: "1px solid #222222" }}
		>
			<div>
				<a href="/#home" className="font-bold text-lg px-16">
					Alpine Dev
				</a>
			</div>

			<div className="flex items-center space-x-20 pr-10">
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
