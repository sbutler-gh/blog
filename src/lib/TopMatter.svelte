<script>
    export let title;
    export let description;
    export let full_url;
    export let og_image;
    export let domain;
</script>

<svelte:head>
<title>{title}</title>


<meta name="description" content={description}>

<!-- Facebook Meta Tags -->
<meta property="og:url" content={full_url}>
<meta property="og:type" content="website">
<meta property="og:title" content={title}>
<meta property="og:description" content={description}>
<meta property="og:image" content={og_image}>

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta property="twitter:domain" content={domain}>
<meta property="twitter:url" content={full_url}>
<meta property="og:title" content={title}>
<meta property="og:description" content={description}>
<meta name="twitter:image" content={og_image}>
</svelte:head>