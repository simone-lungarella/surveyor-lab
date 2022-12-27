<script>
    export let isMenuOpen = false;

    let footerClass = "bg-gray-900 text-white p-4 text-center font-mono text-xs flex flex-col bottom-0";

    $: isMenuOpen ? footerClass += " blur-sm" : footerClass = footerClass.replace(" blur-sm", "");
</script>

<footer class="bg-gray-900 text-white p-4 text-center font-mono text-xs fixed bottom-0">
    <p>Designed & built by Simone Lungarella</p>
</footer>
