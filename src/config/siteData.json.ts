export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean;
	author: { name: string; email: string; twitter: string; };
	defaultImage: { src: string; alt: string; };
}
const siteData: SiteDataProps = {
	name: "Paper Street",
	title: "Paper Street Fibre Arts — Custom handwoven heirlooms by Deidre Cleator",
	description: "Custom handwoven wraps, cowls, and accessories, plus hand-dyed wool roving. Made with love in Bowden, Alberta, Canada.",
	useViewTransitions: true,
	author: { name: "Deidre Cleator", email: "paperstreetfibrearts@gmail.com", twitter: "" },
	defaultImage: { src: "/images/paper-street-logo.png", alt: "Paper Street Fibre Arts" },
};
export default siteData;
