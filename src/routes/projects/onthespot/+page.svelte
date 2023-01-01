<script>
  import { ProjectStore } from "../../../stores.js";

  const project = $ProjectStore.filter((p) => p.id === 1)[0];
</script>

<div class="grid grid-cols-7 md:grid-cols-8 gap-4 -mt-8 lg:mt-20">
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
      A third-person video game created during the <a
        href="https://itch.io/jam/gmtk-jam-2022"
        class="text-amber-300">Game Maker's Toolkit Game Jam</a
      >. <a href="https://github.com/Lincoln-Ab" class="text-white">LincoLn</a>
      and I were responsible for the design and implementation which took place over
      a span of two days from July 15th to 17th, 2022. The game is a 3D platformer
      in which the player must reach the end of each of the six levels by jumping
      on platforms that match the number on the side of the dice with the number
      on the platform. The theme of the Game Jam was
      <span class="font-extrabold text-amber-300">'Roll of the Dice'</span>.
    </p>

    <h3 class="text-gray-300">
      <span class="text-amber-300">&bull; </span>Concept
    </h3>
    <p class="text-gray-200">
      A 3D puzzle videogame where the player uses a dice as the main character
      and must reach the end of each level by walking only on platforms with the
      same number as the side of the dice that lands on it would require the
      player to carefully plan their movements and find the best path through
      each level. The player would need to navigate around obstacles and avoid
      falling off of the platforms, all while trying to reach the end of the
      level as efficiently as possible. The game would likely involve a
      combination of strategy, planning, and quick reflexes as the player
      navigates the dice through the 3D environments. Overall, the goal of the
      game would be to use the dice's unique movement abilities to overcome
      challenges and reach the end of each level.
    </p>

    <h3 class="text-gray-300">
      <span class="text-amber-300">&bull; </span>Future Improvements
    </h3>
    <p class="text-gray-200">
      The playable demo is a proof of concept of the game. The game is not
      finished and there are many things that can be improved. The main
      improvements that we are currently working on are:
    </p>
    <ul>
      <li class="text-gray-200">
        Increase the enjoyment of the game by adding personal abilities that the
        player can use to overcome obstacles or to shorten the path.
      </li>
      <li class="text-gray-200">
        Adding an energy bar that the player can use to perform special actions
        and also to let him walk in wrong platforms.
      </li>
      <li class="text-gray-200">
        Add environmental events that can affect the player's path.
      </li>
    </ul>
  </article>

  <div class="md:col-span-1" />

  <div
    class="col-span-7 grid grid-flow-col gap-6 mt-10 items-center place-content-center md:place-content-start"
  >
    <div class="w-44 rounded-md hover:ring-2 ring-amber-300">
      <a href="https://surveiior.itch.io/on-the-spot"
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
