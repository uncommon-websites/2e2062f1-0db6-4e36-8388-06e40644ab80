<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Pricing from "$lib/components/layout/Pricing.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Pricing />

<Testimonials
  testimonials={[
    {
      name: "Ryan Freeman",
      position: "Dispatch Manager",
      company: "TR Miller",
      quote:
        "After Probook, we added almost $100 to our average ticket. Our techs are happier, our board makes more sense—and we trust it.",
      image: "/generated/image-a-professional-headshot-of-ryan-freeman-.webp"
    },
    {
      name: "Krystin Hines",
      position: "Dispatcher",
      company: "Lion Home Service",
      quote:
        "Probook helped my dispatch team go from managing 2-3 techs each to handling 10 to 15 without any chaos.",
      image: "/generated/image-a-professional-headshot-of-krystin-hines.webp"
    },
    {
      name: "Chris Holleran",
      position: "General Manager",
      company: "Auchinachie Services",
      quote:
        "Revenue per call shot up after Probook. We’re capitalizing on calls instead of just filling time slots.",
      image: "/generated/image-a-professional-headshot-of-chris-hollera.webp"
    }
  ]}
/>

<CallToAction
  title="Dispatch smarter. Sell more. Stress less."
  subtitle="Turn your dispatch board into a profit center."
  description="Probook makes dispatching seamless—so you can send the right tech to the right call, increase ticket size, and keep your team happy. Go live in days and get unmatched support with a real person (our CEO) on site."
  imageSrc="/generated/image-a-cheerful-home-service-dispatcher-sits-.webp"
  callsToAction={[{
    href: 'https://calendly.com/george-eliadis/probook-demo',
    label: 'Book a free demo',
    variant: 'primary',
  }]}
/>

