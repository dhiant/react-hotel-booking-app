import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { BsQuestionCircle } from "react-icons/bs";
// import ReactTooltip from "react-tooltip";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
	const { user } = useContext(AuthContext);

	return (
		<header className="bg-primary text-white w-full md:max-w-[1080px] mx-auto">
			<div className=" flex flex-wrap items-center text-white justify-between py-2">
				<div>
					<Link to="/">
						<h2 className="text-2xl font-bold text-white">Roomies</h2>
					</Link>
				</div>
				<div className="flex gap-x-2 md:gap-x-6 gap-y-2 flex-wrap items-center text-base">
					{/* NPR Button */}
					{/* <div className="relative">
						<button
							className="font-bold px-2 xs:p-4 hover:bg-primaryLight"
							data-tip="Choose your language"
						>
							NPR
							<ReactTooltip place="bottom" type="dark" effect="solid" />
						</button>
					</div> */}
					{/* Flag Button */}
					{/* <div className="relative">
						<button
							className="hover:bg-primaryLight p-4"
							data-tip="Choose your currency"
						>
							<img
								src="https://cf.bstatic.com/static/img/flags/new/48-squared/us/fa2b2a0e643c840152ba856a8bb081c7ded40efa.png"
								alt="USA flag"
								className="rounded-full w-6 h-6 "
							/>
							<ReactTooltip place="bottom" type="dark" effect="solid" />
						</button>
					</div> */}
					{/* Contact Cusomer Service */}
					{/* <div className="relative">
						<a
							href="https://secure.booking.com/help.en-gb.html?label=gen173nr-1FCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AEB6AEB-AELiAIBqAIDuAKXnr6TBsACAdICJDViMTRlNjRjLTU4MzktNDRmMC05ZWFkLTgyZDA3YzYwZWE2ZdgCBuACAQ&sid=74660c001dd0d4c55c1b7bcd0a8b7ca5#/"
							alt="contact customer service"
						>
							<button
								className="hover:bg-primaryLight p-4"
								data-tip="Contact Customer Service"
							>
								<BsQuestionCircle className="w-6 h-8 " />
								<ReactTooltip place="bottom" type="dark" effect="solid" />
							</button>
						</a>
					</div> */}
					{/* List your property */}
					{/* <a
						href="https://join.booking.com/?lang=en-gb&utm_source=topbar&utm_medium=frontend&amp;label=gen173nr-1FCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AEB6AEB-AELiAIBqAIDuAKXnr6TBsACAdICJDViMTRlNjRjLTU4MzktNDRmMC05ZWFkLTgyZDA3YzYwZWE2ZdgCBuACAQ&amp;aid=304142"
						alt="list your property"
					>
						<button className=" border-white hover:bg-primaryLight border-2 px-4 py-2 font-medium text-sm leading-none">
							List your Property
						</button>
					</a> */}
					{user ? (
						<p className="w-14 h-14 rounded-full text-center flex items-center justify-center bg-white text-primaryLight px-4 py-2 text-base font-medium">
							{user.username.split(" ")[0]}
						</p>
					) : (
						<>
							<Link to="/login" alt="register">
								<button className="bg-white hover:bg-opacity-90 text-primaryLight px-4 py-2 leading-none text-sm font-medium">
									Register
								</button>
							</Link>
							<Link to="/login" alt="sign in">
								<button className="bg-white hover:bg-opacity-90 text-primaryLight px-4 py-2 leading-none text-sm font-medium">
									Sign in
								</button>
							</Link>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
