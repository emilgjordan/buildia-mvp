<script lang="ts">
	import type { PageData } from './$types';
	import Announcement from './(components)/announcement.svelte';
	import ProjectsSidebar from './(components)/projects-sidebar.svelte';

	const { data }: { data: PageData } = $props();

	let projectsSidebarItems = data?.projects?.map((project: any) => {
		return { title: project.title, href: `project/${project.id}` };
	});

	//temporary
	const announcements = [
		{
			title: 'Buildia frontend advancements',
			body: "CEO and Founder Emil Jordan has been working on the frontend for the Buildia platform, using the reactive frontend component framework known as svelte. Upon building the frontend, he's discovered missing features in the NestJS backend which he has been working to implement. One such feature is the search engine, a hard ploblem to solve.",
			date: new Date(),
			author: 'Emil Jordan',
			images: [],
			project: 'Buildia'
		},
		{
			title: 'MongoDB stuff',
			body: 'When comparing values of different BSON types in sort operations, MongoDB uses the following comparison order, from lowest to highest: MinKey (internal type)NullNumbers (ints, longs, doubles, decimals)Symbol, String Object Array BinData ObjectId Boolean Date Timestamp Regular Expression MaxKey (internal type) For details on the comparison/sort order for specific types, see Comparison/Sort Order.',
			date: new Date(),
			author: 'Who Knows',
			images: [
				'https://webimages.mongodb.com/_com_assets/cms/kxf2mhakv5veo59ma-Group%2022000.svg?auto=format%2Ccompress&ch=DPR'
			],
			project: 'MongoDB'
		},
		{
			title: 'Buildia frontend advancements',
			body: "CEO and Founder Emil Jordan has been working on the frontend for the Buildia platform, using the reactive frontend component framework known as svelte. Upon building the frontend, he's discovered missing features in the NestJS backend which he has been working to implement. One such feature is the search engine, a hard ploblem to solve.",
			date: new Date(),
			author: 'Emil Jordan',
			images: [],
			project: 'Buildia'
		},
		{
			title: 'MongoDB stuff',
			body: 'When comparing values of different BSON types in sort operations, MongoDB uses the following comparison order, from lowest to highest: MinKey (internal type)NullNumbers (ints, longs, doubles, decimals)Symbol, String Object Array BinData ObjectId Boolean Date Timestamp Regular Expression MaxKey (internal type) For details on the comparison/sort order for specific types, see Comparison/Sort Order.',
			date: new Date(),
			author: 'Who Knows',
			images: [
				'https://webimages.mongodb.com/_com_assets/cms/kxf2mhakv5veo59ma-Group%2022000.svg?auto=format%2Ccompress&ch=DPR'
			],
			project: 'MongoDB'
		}
	];
</script>

{#if data?.user}
	<div class="flex h-full flex-row">
		<aside class="sticky top-16 h-[calc(100vh-4rem)] w-1/3">
			<ProjectsSidebar items={projectsSidebarItems} />
		</aside>

		<div class=" h-full w-full overflow-y-auto p-8">
			<h1 class="mb-4 text-lg font-semibold">Home</h1>
			<ul class="flex flex-col space-y-4">
				{#each announcements as announcement}
					<li>
						<Announcement {announcement} />
					</li>
				{/each}
			</ul>
		</div>
	</div>
{:else}{/if}
