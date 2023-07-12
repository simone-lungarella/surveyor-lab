<script>
  import { slide } from "svelte/transition";
  import { ProjectStore } from "../../../stores.js";

  const project = $ProjectStore.filter((p) => p.id === 4)[0];
</script>

<div
  class="grid grid-cols-7 md:grid-cols-8 gap-4 -mt-8 lg:mt-20"
  transition:slide={{ duration: 1000 }}
>
  <div class="md:col-span-1" />
  <section class="prose col-span-7">
    <div class="flex gap-6 items-center">
      <h1 class="text-white">{project.title}</h1>
      <div class="h-0.5 w-1/3 bg-gray-700 -mt-7" />
    </div>
    <span class="text-amber-300 font-mono">{project.techs.join(" - ")}</span>
  </section>
  <div class="md:col-span-1" />

  <article class="text-column font-mono prose col-span-7">
    <h3 class="text-gray-300">
      <span class="text-amber-300">&bull; </span>Context
    </h3>
    <p class="text-gray-200">
      A top-down spaceship shooter game inspired by Space Invaders. <a
        href="https://github.com/Lincoln-Ab"
        class="text-white">LincoLn</a
      >
      and I were responsible for the design and implementation which took place over
      a month from May 20th to June 10th, 2023.
    </p>

    <h3 class="text-gray-300">
      <span class="text-amber-300">&bull; </span>Concept
    </h3>
    <p class="text-gray-200">
      The game is a 2D platformer where you control a spaceship and the
      objective is to destroy waves of enemy spaceships. The player can move the
      spaceship using the arrow keys and shooting projectiles at the enemies
      using the space bar. The game ends if the player's spaceship is destroyed
      or after defeating all the enemy waves.
    </p>

    <h3 class="text-gray-300">
      <span class="text-amber-300">&bull; </span>Future Improvements
    </h3>
    <p class="text-gray-200">
      The game is a very small complete game that we made to improve our
      familiarity with Unity Engine. Even if it's complete it lacks some key
      feature and small improvements.
    </p>
    <ul>
      <li class="text-gray-200">
        Make the game more accessible with different options that should be
        configurable.
      </li>
      <li class="text-gray-200">Adding a more visible reload hint.</li>
      <li class="text-gray-200">
        Only a playable level is currently available. A few more should be
        added.
      </li>
      <li class="text-gray-200">
        There's no way yet to save the current state of the game. A save&load
        feature is needed.
      </li>
      <li class="text-gray-200">
        There is only one type of enemy, which make the game monotonous.
      </li>
      <li class="text-gray-200">
        A few power-ups could be added to make the level more satisfying to play
      </li>
    </ul>
  </article>

  <div class="md:col-span-1" />

  <div
    class="col-span-7 grid grid-flow-col gap-6 mt-10 items-center place-content-center md:place-content-start"
  >
    <div class="w-44 rounded-md hover:ring-2 ring-amber-300">
      <a href="https://surveiior.itch.io/starknight"
        ><img
          src="https://static.itch.io/images/badge.svg"
          alt="Available on itch. io badge"
        />
      </a>
    </div>
    {#if project.github}
      <a href={project.github}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-github text-white hover:text-amber-300"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          />
        </svg>
      </a>
    {/if}
  </div>
</div>
