<script>
  import { slide } from "svelte/transition";
  import { ProjectStore } from "../../../stores.js";

  const project = $ProjectStore.filter((p) => p.id === 3)[0];
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
      A React application that allows users to define production related
      information about their products from the cleaning phase of raw products
      to the final packaging of the product. The application make use of <a
        href="https://formik.org/"
        class="text-amber-300">Formik</a
      >
      and handle a set of six pages each of them containing information about a different
      phase of the production. Each form is finalized with a
      <span class="font-extrabold text-white">Download</span>
      button that generates a PDF file with the information that the user has entered.
    </p>

    <h3 class="text-gray-300">
      <span class="text-amber-300">&bull; </span>Backend
    </h3>
    <p class="text-gray-200">
      The backend is a Java microservice called Foptility and is responsible for
      generating the PDF files. The microservice is deployed on a <a
        href="https://foptility.herokuapp.com/openapi/swagger-ui/index.html"
        class="text-amber-300">Heroku</a
      >
      instance and exposes a REST API that is consumed by the frontend. This same
      microservize can be used from the browser by accessing the swagger-ui page.
      The code is open-source and can be found
      <a
        href="https://github.com/simone-lungarella/foptility"
        class="text-amber-300">here</a
      >.
    </p>

    <h3 class="text-gray-300">
      <span class="text-amber-300">&bull; </span>Frontend
    </h3>
    <p class="text-gray-200">
      The frontend is a React application responsive and mobile friendly. It is
      deployed on a <a href={project.website} class="text-amber-300"
        >Github Pages</a
      >. The application make use of react-router-dom to handle the navigation
      between the different pages. Uses Formik and Yup to handle the forms and
      the validation of the inputs.
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
