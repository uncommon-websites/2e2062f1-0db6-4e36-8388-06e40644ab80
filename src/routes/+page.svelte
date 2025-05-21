<script lang="ts">
	// Components
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
</script>

<CustomerCardHero
  centered={true}
  title="Effortless dispatching. Bigger jobs. Happier techs."
  subtitle="Probook helps home service companies grow revenue, cut drive time, and make dispatching seamless—with confidence every shift."
  customers={[
    {
      name: "Ryan Freeman",
      position: "Dispatch manager",
      imageSrc: "/generated/image-a-professional-male-dispatch-manager-in-.webp",
      quote: "I used to need constant gut checks. Now I can run a full board knowing every tech is matched to the job that fits them best."
    },
    {
      name: "Andrea Williams",
      position: "Lead dispatcher",
      imageSrc: "/generated/image-a-professional-female-lead-dispatcher-wo.webp",
      quote: "Probook took the pressure out of dispatching. I can breathe, stay ahead, and make better decisions in less time."
    },
    {
      name: "Mike Sullivan",
      position: "Lead dispatcher",
      imageSrc: "/generated/image-a-professional-male-lead-dispatcher-enga.webp",
      quote: "I finally trust the board. Dispatching used to be reactive and chaotic—Probook makes it click."
    },
    {
      name: "Krystin Hines",
      position: "Dispatcher",
      imageSrc: "/generated/image-a-professional-female-dispatcher-smiling.webp",
      quote: "I’m just faster. I don’t second guess my calls anymore. I can see what makes the most sense right away."
    },
    {
      name: "Chris Holleran",
      position: "General manager",
      imageSrc: "/generated/image-a-male-general-manager-in-a-service-offi.webp",
      quote: "We’ve seen huge improvements in efficiency and consistency. Probook transformed the way our team works."
    }
  ]}
  callsToAction={[{ href: "/demo", label: "See how it works" }]}
/>
<LogoScroller
	label="Trusted by home service leaders"
	logoUrls={[
		'https://logo.clearbit.com/ars.com',
		'https://logo.clearbit.com/milani.ca',
		'https://logo.clearbit.com/rotorooter.com',
		'https://logo.clearbit.com/onehourair.com'
	]}
/>

<Summary
	title="AI-powered dispatching for home service"
	text="Probook uses AI to optimize technician assignments, boost sales, and help dispatchers work more efficiently. Trusted by HVAC, plumbing, electrical, and sewer companies to simplify the dispatch board and deliver better customer service."
/>

<Testimonials
	testimonials={[
		{
			name: "Sabine Kessler",
			position: "Dispatch lead",
			company: "Polar Air HVAC",
			quote:
				"Probook gave me back an hour every day. I don’t have to second-guess schedules or flip through spreadsheets—now my team gets out the door faster, and I actually have time for lunch again.",
			image: "/generated/image-a-confident-female-hvac-dispatcher-weari.webp"
		},
		{
			name: "Teagan Rios",
			position: "Operations manager",
			company: "Pioneer Plumbing",
			quote:
				"Before Probook, one wrong tech at the wrong job could ruin the day. Now, with board reshuffling and real-time data, our risk of urgent callbacks is down 40%—and I sleep better for it.",
			image: "/generated/image-a-thoughtful-male-plumbing-operations-ma.webp"
		},
		{
			name: "Alex Remy",
			position: "Field team lead",
			company: "Bright Current Electric",
			quote:
				"We saw a 15% revenue lift in six months. Probook doubled the jobs my techs finish per shift—and I’m seeing fewer mistakes, happier techs, and a real difference on our bottom line.",
			image: "/generated/image-a-smiling-nonbinary-technician-leader-dr.webp"
		}
	]}
/>

<Features
	title="What makes Probook different"
	subtitle="Purpose-built for service company dispatchers"
	features={[
		{
			title: "AI technician matching",
			description: "Automatically assign the right tech to every job based on sales stats, drive time, and job types—no more guessing."
		},
		{
			title: "Copilot and Autopilot modes",
			description: "Choose AI-powered recommendations or let full automation reshuffle your board in real time."
		},
		{
			title: "ServiceTitan integration",
			description: "Sync instantly with ServiceTitan—no double entry, no lag, and always up to date."
		},
		{
			title: "Technician performance dashboards",
			description: "Track sales, flip rate, job durations, and training needs all in one place."
		},
		{
			title: "Rapid onboarding with expert support",
			description: "2-day in-person launch with the CEO, plus support that responds in under 2 minutes on average."
		},
		{
			title: "Trusted partnerships",
			description: "Official partner of ServiceTitan and Nexstar, supporting top HVAC, plumbing, electrical, and sewer companies."
		}
	]}
/>

<UseCases
	title="Use Cases"
	subtitle="Real-world applications for your business needs"
	useCases={[
		{
			title: "Boost average ticket size",
			description: "Pair every job with the technician most likely to maximize sales based on real-time performance data. Probook helps you grow revenue on every call—without extra hassle for your dispatchers.",
			image: "/generated/use-case-boost-average-ticket-size.webp",
			link: {
				href: "/use-cases/boost-average-ticket-size",
				label: "Learn more"
			}
		},
		{
			title: "Cut drive time, fit more jobs per day",
			description: "Our AI dispatcher finds the most efficient route and tech for every job, helping your team cut down on windshield time. That means you can fit more jobs into the day—and avoid burnout.",
			image: "/generated/use-case-cut-drive-time-fit-more-jobs.webp",
			link: {
				href: "/use-cases/cut-drive-time-fit-more-jobs",
				label: "See how"
			}
		},
		{
			title: "Reduce callbacks and urgent re-dispatches",
			description: "Smart assignments mean happier customers and less chaos. Probook reduces mistakes and callbacks so your dispatchers spend less time fighting fires.",
			image: "/generated/use-case-reduce-callbacks-redispatches.webp",
			link: {
				href: "/use-cases/reduce-callbacks-redispatches",
				label: "Learn more"
			}
		}
	]}
/>

<AboutTeaser />
<CallToAction
  title="Confident dispatching starts here"
  subtitle="See how Probook helps you work smarter"
  description="Ready to stop guessing and start growing? Probook puts every dispatcher one step ahead—so your team can generate more sales, reduce stress, and keep your customers happy."
  imageSrc="/generated/image-a-cheerful-home-services-business-manage.webp"
  callsToAction={[
    { href: "/demo", label: "Book a demo", variant: "primary" },
    { href: "/contact", label: "Talk to our team", variant: "secondary" }
  ]}
/>
