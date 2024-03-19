import React from "react";
import Button from "./common/Button";

const MailList = () => {
	return (
		<div>
			<div className="bg-primaryDark text-white py-12 mt-8">
				<div className="max-w-4xl mx-auto text-center">
					<div className="">
						<h1 className="text-2xl font-light">Save time, save money!</h1>
						<p className="text-base text-[#bdbdbd]">
							Sign up and we'll send the best deals to you
						</p>
					</div>
					<div className="mt-5 flex gap-1 sm:gap-3 justify-center">
						<input
							type="text"
							placeholder="Your email"
							className="pl-2 py-4 w-96 rounded-md"
						/>
						<Button
							text="Subscribe"
							fontWeight="font-normal"
							className="rounded-sm"
							padding="px-4"
						/>
					</div>
					<label htmlFor="subscribe" className="">
						<input type="checkbox" name="" id="subscribe" />
						<span className="ml-2 text-sm">
							Send me a link to get the FREE Booking.com app!
						</span>
					</label>
				</div>
			</div>

			{/* list your property */}
			{/* <div className="bg-primary py-3 border-b-2 border-white text-center">
        <a
          href="https://join.booking.com/?lang=en-gb&aid=304142&utm_source=footer_menu&utm_medium=frontend&label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALbyrWTBsACAdICJGEzMTQxOWJiLTgzMGEtNGJkMS1hNTM1LWY4ZWY0ZDNmNWM3ZNgCBOACAQ"
          target="_blank"
          rel="noreferrer"
        >
          <button className="text-white border-white hover:bg-primaryLight border-2 px-4 py-2 font-medium text-xs leading-none">
            List your Property
          </button>
        </a>
      </div> */}
			{/* link Section */}
			{/* <div className="bg-primary">
				<div className="max-w-5xl mx-auto bg-primary text-center flex justify-center sm:block py-4">
					<ul className="text-white text-xs sm:text-sm font-bold underline pb-4 flex justify-center sm:justify-start gap-x-2 gap-y-4 sm:gap-x-4 flex-wrap">
						<a href="https://www.booking.com/?prefer_site_type=mdot">
							<li>Mobile Version</li>
						</a>
						<a href="https://account.booking.com/sign-in?op_token=EgVvYXV0aCLlAgoUdk8xS2Jsazd4WDl0VW4yY3BaTFMSCWF1dGhvcml6ZRo1aHR0cHM6Ly9zZWN1cmUuYm9va2luZy5jb20vbG9naW4uaHRtbD9vcD1vYXV0aF9yZXR1cm4qhAJVc0FCaEFmMHMxS0xNaUlMN20tcWQ3ZUNsZWZ6R1ZPTW42Z3RvYVhOamZDem1jaTNXSHZzbmR1c2t2dm1ZVGFKZEI1UE5RaXNUWUNBVVEtbjFXelFwcS1zMTVFLXVlWmtxWWk2UW93ZEVhekRqTUtrM2lZWGRtb1JsQ1ZMMnYtY0IzTWZ0NGg4Um9oLVZIeklOYm5yN0JzMUs1QnE4bm5UZ2hGclNnSjhLWnlNUEU1X3FHM2NLYXkzZ3RFcHBOLWZQRGpfazUxbzdvdXg2ZnowMzluT01OY3BzR0tCM3ZmdkVNb3VkRmlFWnpWUUlabkxUeW82ZEFXMmN1Rld6cXNWc3M3YUIEY29kZSoWCI7IEjD6i6ScjcYlOgBCAFiihrSTBg">
							<li>Your Account</li>
						</a>
						<a href="https://secure.booking.com/help.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAExuAEXyAEM2AED6AEB-AECiAIBqAIDuAKky7OTBsACAdICJGU0MWI1NDBkLWUwZGMtNDZlZi04Yzk3LWZiNzg2OTVkZmQ3MNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a">
							<li>Make changes online to your booking</li>
						</a>
						<a href="https://secure.booking.com/help.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAExuAEXyAEM2AED6AEB-AECiAIBqAIDuAKky7OTBsACAdICJGU0MWI1NDBkLWUwZGMtNDZlZi04Yzk3LWZiNzg2OTVkZmQ3MNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a#/?source=blue_footer">
							<li>Customer Service Help</li>
						</a>
						<a href="https://www.booking.com/content/affiliates.html?label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAExuAEXyAEM2AED6AEB-AECiAIBqAIDuAKky7OTBsACAdICJGU0MWI1NDBkLWUwZGMtNDZlZi04Yzk3LWZiNzg2OTVkZmQ3MNgCBOACAQ&sid=610f6dda0c5bc7140145d2030ecf1d3a">
							<li>Become an affiliate</li>
						</a>
						<a href="https://business.booking.com/?lang=en-us&label=gen173nr-1DCAEoggI46AdIM1gEaKsBiAEBmAExuAEXyAEM2AED6AEB-AECiAIBqAIDuAKky7OTBsACAdICJGU0MWI1NDBkLWUwZGMtNDZlZi04Yzk3LWZiNzg2OTVkZmQ3MNgCBOACAQ">
							<li>Booking.com for Business</li>
						</a>
					</ul>
				</div>
			</div> */}
		</div>
	);
};

export default MailList;
