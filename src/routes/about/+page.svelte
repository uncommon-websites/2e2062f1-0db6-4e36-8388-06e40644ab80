<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
  {
    title: "We’ve been there",
    description: "Founded by dispatchers who know the challenges first-hand."
  },
  {
    title: "Hands-on at launch",
    description: "Our CEO is by your side for every go-live—on site and in the room."
  },
  {
    title: "Fast, knowledgeable help",
    description: "Real dispatchers on support. Minutes not hours, resolutions you can count on."
  },
  {
    title: "Make dispatch and techs’ lives easier",
    description: "Building tools that actually reduce stress and boost results."
  },
  {
    title: "It’s a true partnership",
    description: "We work closely with every company for long-haul success."
  }
];
</script>

<SecondaryHero
	title="Smarter dispatching. Bigger tickets."
	subtitle="Send the right tech to every job—automatically."
	imageSrc="/mockups/airport-screen-1747853856334.png"
/>

<!-- Story Section -->
<Story
  paragraphs={[
    "Probook was founded by dispatchers who knew firsthand how tough it is to run a board by gut and guesswork. We saw how quickly small mistakes could cost home service companies real money—and how stressful it was for everyone involved.",
    "So, we built Probook: an AI dispatching platform that takes the guesswork out of call assignments, helping companies match every job to the right technician in seconds. From day one, we partnered directly with companies in HVAC, plumbing, and electrical to make sure our tools solved real problems, not just theoretical ones.",
    "Today, Probook is helping dispatchers and owners boost sales, cut down on drive time, and serve their customers better—all with more confidence and less stress. We’re still here with hands-on support, listening to what dispatchers need and improving every step."
  ]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->
<StakeholderGrid
  stakeholderType="team"
  title="Our team."
  subtitle="Built for dispatchers, by dispatchers."
  stakeholders={[
    {
      name: "George Eliadis",
      position: "Founder & CEO",
      bio: "George brings hands-on industry expertise as a dispatcher to every Probook customer. He personally supports every new launch to guarantee your board runs better than ever.",
      image: "/generated/image-a-professional-headshot-of-a-male-founde.webp"
    }
  ]}
/>




<!-- CTA Section -->
<CallToAction
  title="Smarter dispatching starts here"
  subtitle="Book your Probook demo today"
  description="See how AI-powered dispatching can increase revenue, cut stress, and help your team do more in less time. We’ll walk you through real results and show you Probook in action—hands-on, no pressure. Onboarding is fast, and you’ll get white-glove support from day one."
  imageSrc="/generated/image-a-cheerful-dispatcher-team-gathered-in-a.webp"
  callsToAction={[
    {
      href: "https://calendly.com/george-eliadis/probook-demo",
      label: "Book a demo",
      variant: "primary"
    },
    {
      href: "mailto:hello@getprobook.com",
      label: "Ask a question",
      variant: "secondary"
    }
  ]}
/>
