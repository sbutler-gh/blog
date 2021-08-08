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

<svelte:head>
<link rel="me" href="https://twitter.com/sambutlerUS" />
<link rel="me" href="https://linkedin.com/in/sambutler8" />
<link rel="me" href="mailto:sam@sambutler.us" />
<link rel="me" href="https://github.com/sbutler-gh" />
</svelte:head>

<Header></Header>

<slot />
<!-- 
{#if path == "/"}
<Footer></Footer>
{/if} -->