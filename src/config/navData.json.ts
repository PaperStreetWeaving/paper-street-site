export interface navLinkItem { text: string; link: string; newTab?: boolean; }
export interface navDropdownItem { text: string; dropdown: navLinkItem[]; }
export type navItem = navLinkItem | navDropdownItem;
const navConfig: navItem[] = [
	{ text: "Home", link: "/" },
	{ text: "Custom Weaving", link: "/custom/" },
	{ text: "Pricing", link: "/pricing/" },
	{ text: "About", link: "/about/" },
	{ text: "Shop on Etsy", link: "https://www.etsy.com/shop/PaperStreetFibreArts", newTab: true },
];
export default navConfig;
