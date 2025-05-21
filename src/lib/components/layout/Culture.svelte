<script lang="ts">
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import { animate, stagger } from "motion";
	import { onMount } from "svelte";

	// Types
	export type Value = {
		title: string;
		description: string;
	};

	// Props
	const { values = [] }: { values: Value[] } = $props();

	let cards: HTMLElement[] = $state([]);

	onMount(() => {
		if (!cards.length) return;
		animate(
			cards,
			{
				y: ["1.5rem", 0],
				filter: ["blur(2px)", "blur(0px)"],
				opacity: [0, 1]
			},
			{
				duration: 0.3,
				ease: "easeOut",
				delay: stagger(0.1, {
					ease: "easeInOut"
				})
			}
		);
	});
</script>

<section class="bg-white dark:bg-gray-950">
	<div
		class="section-py section-px container mx-auto grid gap-8 [--gap:--spacing(8)] [--radius:var(--radius-2xl)]"
	>
		<SectionHeader title="Our culture." subtitle="Practical values that drive everything we do" />

<div class="grid gap-(--gap)" style:grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))">
  <div class="relative border-t border-gray-200 pt-4 dark:border-gray-900">
    <div class="text-caption z-10">
      <div>
        <div class="text-headline mb-[1em]">Customer decisions, not company ego</div>
        <div class="text-body text-gray-500 dark:text-gray-400">If a dispatcher or tech needs it changed, we listen—and often ship it by week’s end. The field always comes first.</div>
      </div>
    </div>
  </div>
  <div class="relative border-t border-gray-200 pt-4 dark:border-gray-900">
    <div class="text-caption z-10">
      <div>
        <div class="text-headline mb-[1em]">Clarity wins</div>
        <div class="text-body text-gray-500 dark:text-gray-400">We communicate simply and build software that’s easy to learn. No jargon, just results.</div>
      </div>
    </div>
  </div>
  <div class="relative border-t border-gray-200 pt-4 dark:border-gray-900">
    <div class="text-caption z-10">
      <div>
        <div class="text-headline mb-[1em]">No silent passengers</div>
        <div class="text-body text-gray-500 dark:text-gray-400">Everyone is expected to speak up, offer feedback, and contribute to the fast-changing needs of the team and our customers.</div>
      </div>
    </div>
  </div>
</div>
	</div>
</section>
