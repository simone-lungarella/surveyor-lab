<script>
  import Footer from "../Footer.svelte";
  import Profile from "/src/lib/image/profile.png";
</script>

<div
  class="grid grid-cols-7 md:grid-cols-8 lg:grid-cols-9 gap-4 -mt-8 lg:mt-20"
>
  <div class="md:col-span-1" />
  <section class="prose col-span-7 lg:col-span-8">
    <div class="flex gap-6 items-center">
      <h2 class="text-white">
        <span class="text-amber-300 font-mono">01. </span>About Me
      </h2>
      <div class="h-0.5 w-1/3 bg-gray-700 mt-7" />
    </div>
  </section>
  <div class="md:col-span-1" />

  <article class="text-column font-mono prose col-span-7 lg:col-span-4">
    <p class="text-gray-200">
      My name is Simone, a 26-year-old resident of Rome. I pride myself on
      maintaining a positive outlook and strive to do so in all aspects of my
      life. When faced with challenges, I approach them with optimism and make
      an effort to learn from every experience.
    </p>
    <p class="text-gray-200">
      I have a passion for creating things from the ground up, whether it be
      designing and developing websites or video games. In all of my endeavors,
      I make a point to absorb as much knowledge as possible while also having a
      good time.
    </p>

    <h3 class="text-gray-200">My favourite technologies are:</h3>
    <ul class="text-gray-200">
      <li>Java & SpringBoot</li>
      <li>SvelteJS</li>
      <li>TailwindCSS</li>
      <li>Unreal Engine</li>
    </ul>
  </article>
  <section class="col-span-7 lg:col-span-4 mt-10 lg:mt-0">
    <div class="grid place-content-center">
      <img
        src={Profile}
        alt="Simone Lungarella profile"
        class="bg-center p-4 w-96 hover:scale-110 transition duration-500 ease-in-out hover:ring-2 ring-amber-300"
      />
    </div>
  </section>
  <div class="lg:col-span-1" />
</div>

<div class="mt-10 grid grid-cols-7 place-content-center w-full">
  <div class="col-span-1" />
  <div class="h-0.5 bg-gray-700 mb-5 shadow-lg col-span-5" />
  <div class="col-span-1" />
  <div class="col-span-7">
    <Footer />
  </div>
</div>
