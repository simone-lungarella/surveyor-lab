<script>
  import "../app.css";
  import Header from "./Header.svelte";

  let bodyStyle = "bg-gray-900 text-white p-4";
  const handleMenuToggle = (/** @type {{ detail: any; }} */ event) => {
    event.detail
      ? (bodyStyle += " blur-sm")
      : (bodyStyle = bodyStyle.replace(" blur-sm", ""));
  };
</script>

<Header on:menu-open={handleMenuToggle} />
<body class={bodyStyle}>
  <slot />
</body>
