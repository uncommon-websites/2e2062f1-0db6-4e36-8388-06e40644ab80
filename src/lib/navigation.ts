/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Book demo",
	href: "/"
};

export const navigation: NavItem[] = [
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Use Cases",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "Boost average ticket size",
				href: "/use-cases/boost-average-ticket-size",
				image: "/generated/image-a-service-technician-and-a-homeowner-eng.webp",

				description:
					"Innovative solutions for patient care, delivering advanced analytics to improve diagnostics, enhancing personalized treatment plans through real‑time data insights, and seamlessly integrating with existing healthcare systems to drive better outcomes and streamline clinical workflows",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Cut drive time, fit more jobs per day",
				href: "/use-cases/cut-drive-time-fit-more-jobs",
				image: "/generated/image-a-group-of-home-service-team-members-loa.webp",
				description: "Our AI dispatcher finds the most efficient route and tech for every job, helping your team cut down on windshield time. That means you can fit more jobs into the day—and avoid burnout.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Reduce callbacks and urgent re-dispatches",
				href: "/use-cases/reduce-callbacks-redispatches",
				image: "/generated/image-a-dispatcher-and-a-technician-celebratin.webp",
				description: "Smart assignments mean happier customers and less chaos. Probook reduces mistakes and callbacks so your dispatchers spend less time fighting fires.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Education",
				href: "/use-cases/education",
				image:
					"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				description: "Enhancing learning experiences",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
			// Social media might be handled differently, not typically a nav item
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
