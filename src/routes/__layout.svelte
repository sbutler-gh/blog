<script>
	import '../app.css';
	import Example from "$lib/Example.svelte.md";
	import Header from "$lib/Header.svelte";
	// import Footer from "$lib/Footer.svx";

	// let path;

	// if (typeof window !== "undefined") {
	// 	path = window.location.pathname;
	// }
</script>

<Header></Header>

<slot />
<!-- 
{#if path == "/"}
<Footer></Footer>
{/if} -->