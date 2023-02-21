<script>
  import { slide } from "svelte/transition";
  import { ProjectStore } from "../../../stores.js";

  const project = $ProjectStore.filter((p) => p.id === 2)[0];
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
      This Svelte application helps users manage construction sites. They can
      create, update, and delete sites, and track progress by marking steps as
      complete.
    </p>
    <p class="text-gray-200">
      There are two types of users: Admins, who can create users and have full
      access to the site list, and regular users. Authentication is handled
      through JWT tokens obtained from the backend upon providing the correct
      username and password. The app stores data using a PostgreSQL database
      hosted as a Heroku add-on.
    </p>

    <h3 class="text-gray-300">
      <span class="text-amber-300">&bull; </span>Backend
    </h3>
    <p class="text-gray-200">
      The backend is a Java microservice called event-handler and is responsible
      for handling CRUD operations on the construction sites and the steps. The
      API is reachable through the browser using <a
        href="https://dockyard-handler.herokuapp.com/swagger-ui/index.html"
        class="text-amber-300">swagger-ui</a
      > by providing an existing username and password.
    </p>

    <h3 class="text-gray-300">
      <span class="text-amber-300">&bull; </span>Frontend
    </h3>
    <p class="text-gray-200">
      The frontend is a React application responsive and mobile friendly. It is
      deployed on a <a href={project.website} class="text-amber-300"
        >Github Pages</a
      >. Is built with material-ui and offer a way to access and interact with
      each of the construction sites. Every profile created can have a
      fine-grain access to the sites with the possibility to interact only wwith
      a part of steps of each site.
    </p>
  </article>

  <div class="md:col-span-1" />

  <div
    class="col-span-7 grid grid-flow-col gap-6 mt-10 items-center place-content-center md:place-content-start"
  >
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
    {#if project.website}
      <a href={project.website}>
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
          class="feather feather-external-link text-white hover:text-amber-300"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>
    {/if}
  </div>
</div>
