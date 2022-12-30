<script>
    import { ProjectStore } from "../../stores.js";
    import OnTheSpot from "/src/lib/image/onthespot.png";
    import PTracker from "/src/lib/image/product-tracker.png";
    import Winforce from "/src/lib/image/winforce.png";
</script>

<div class="grid grid-cols-8 md:grid-cols-9 gap-4 -mt-12 lg:mt-12 space-y-4">
    <div class="md:col-span-1" />

    <div class="prose col-span-8">
        <div class="flex gap-6 items-center">
            <h2 class="text-white">
                <span class="text-amber-300 font-mono">03. </span>Projects
            </h2>
            <div class="h-0.5 w-1/4 md:w-1/3 bg-gray-700 mt-7" />
        </div>
    </div>

    {#each $ProjectStore as project (project.id)}
        <div class="md:col-span-1" />

        <div class="col-span-8 md-col-span-7 prose font-mono">
            <h2 class="text-white">{project.title}</h2>
        </div>

        <div class="md:col-span-1" />

        <div class="col-span-8 md:col-span-7 grid grid-flow-row place-content-center" >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center lg:items-start" >
                <div class="overflow-hidden grayscale-[.7] hover:grayscale-0 transition duration-300 ease-in-out" >
                    {#if project.id === 1}
                        <img src={OnTheSpot} alt="Project preview" class="w-full h-full object-fill" />
                    {:else if project.id === 2}
                        <img src={Winforce} alt="Project preview" class="w-full h-full object-fill" />
                    {:else if project.id === 3}
                        <img src={PTracker} alt="Project preview" class="w-full h-full object-fill" />
                    {/if}
                </div>

                <div class="prose font-mono">
                    <span class="text-amber-300" >{project.techs.join(" - ")}</span >
                    <p class="text-gray-300">{project.description}</p>
                    <a class="text-white" href={project.page} >More about {project.title}</a >
                    <div class="grid grid-flow-col place-content-start gap-4 mt-5">
                        {#if project.github}
                            <a href={project.github}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-github text-white hover:scale-110 hover:text-amber-300" >
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                            </a>
                        {/if}
                        {#if project.website}
                            <a href={project.website}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-external-link text-white hover:scale-110 hover:text-amber-300" >
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                            </a>
                        {/if}
                    </div>
                </div>
            </div>
        </div>

        <div class="md:col-span-1" />
    {/each}
</div>
