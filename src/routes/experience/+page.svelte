<script>
    import {WorkStore} from '../../stores.js';

    let selectedWorkplace = 0;

</script>

<div class="grid grid-cols-8 lg:grid-cols-9 gap-4 -mt-12 md:mt-20">
    <div class="md:col-span-1" />
    <div class="prose col-span-8 md:col-span-7 lg:col-span-8">
        <div class="flex gap-6 items-center">
            <h2 class="text-white">
                <span class="text-amber-300 font-mono">02. </span>Experience
            </h2>
            <div class="h-0.5 w-1/4 md:w-1/3 bg-gray-700 mt-7" />
        </div>
    </div>
    <div class="md:col-span-1" />

    <div class="col-span-8 md:col-span-2 grid grid-flow-col md:grid-flow-row place-content-start" >
        {#each $WorkStore as work}
            <div class="flex gap-2 flex-col-reverse md:flex-row">
                <div class="h-0.5 w-full md:h-full md:w-0.5 bg-gray-500" style={selectedWorkplace === work.id - 1 ? "background-color: rgb(252 211 77);" : "background-color: rgb(107 114 128);"} />
                <button class="text-left p-2 rounded-sm text-md font-mono w-full hover:bg-gray-800 hover:text-amber-300" style={selectedWorkplace === work.id - 1 ? "color: rgb(252 211 77);" : "color: rgb(255 255 255);"} on:click={() => selectedWorkplace=work.id - 1 } >{work.company}</button >
            </div>
        {/each}
    </div>
    <div class="col-span-8 md:col-span-5 prose font-mono" >
        <h3 class="text-white">{$WorkStore[selectedWorkplace].title} <span class="text-amber-300">@{$WorkStore[selectedWorkplace].company}</span></h3>
        <h4 class="text-gray-500">{$WorkStore[selectedWorkplace].from} - {$WorkStore[selectedWorkplace].to}</h4>
        
        <ul class="text-gray-200">
            {#each $WorkStore[selectedWorkplace].topics as topic}
                <li>{topic}</li>
            {/each}
        </ul>
    </div>
    <div class="md:col-span-1" />
</div>
