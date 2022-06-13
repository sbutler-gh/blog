<script>
    import Widget from "$lib/Widget.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        var s = document.createElement("script");
         s.type = "text/javascript"; 
         s.src = "https://climatewidget.netlify.app/dist.js"; 
         document.getElementById('banner-div').appendChild(s); 
         console.log(s);
    })
</script>
<svelte:head>
    <!-- <script src="https://climatewidget.netlify.app/dist.js" on:load={function() { var s = document.createElement("script"); s.type = "text/javascript"; s.src = "https://climatewidget.netlify.app/dist.js"; document.getElementbyId('banner').appendChild(script); console.log(script)}}></script> -->
</svelte:head>

<!-- <Widget></Widget> -->
<h3>Climate Widget</h3>
<p>This is a banner that can be embedded on any page on the Internet (e.g. an organization website, a blog, a news site, an article) in a single line of code:</p>
<div id="banner-div" style="">
</div>
<p>When people hit "submit", they can receive email introductions to direct action groups in their area – helping them onboard into action, and helping organizations connect with new members.</p>
<p>This doesn't require anything from organizations.  They can keep their existing processes, and get the benefit of new members coming to their inbox.</p>
<p>The point is helping people onboard direct action and helping organizations mobilize more people — connecting with each other, wherever they are.</p>
<p><em>What this could look like on Grist</em></p>
<img src="./grist_climate_widget_desktop.png" loading="lazy">
    
<p style="margin-bottom: 10px;">To embed this banner on your website, just copy:</p>
<p style="margin: 0px; background: black; color: white; border-radius: 5px; padding: 5px;">&lt;script src="https://climatewidget.netlify.app/dist.js"&gt;&lt;/script&gt;</p>
<p style="margin-top: 10px;">and paste in your HTML code.</p>

		<p>(This is still just a demo, and the form data isn't submitted anywhere — but the embed works successfully, and you can try it on your own page.  All we need is organizations who want to use this to make it happen for real!)</p>
		<p>Want to try this?  Questions or feedback?  Anything else?</p>
		<p>Contact on Signal/WhatsApp (+1 seven zero three four eight nine one six nine seven) or hello@sambutler.us</p>

        <details><summary style="margin-bottom: 20px;"><em>Browse what this could look like on other sites</em></summary>
            <p><em>The Intercept</em></p>
           <img src="./intercept_climate_widget_desktop2.png" loading="lazy">
           <p><em>Extinction Rebellion</em></p>
           <img src="./xr_climate_widget_desktop.png" loading="lazy">
           <p><em>Declare Emergency</em></p>
           <img src="./de_climate_widget_desktop.png" loading="lazy">
           <p><em>Hot Take Podcast</em></p>
           <img src="./hottake_climate_widget_desktop.png" loading="lazy">
           <p><em>The Guardian</em> (mobile)</p>
           <img src="./guardian_climate_widget_mobile.png" loading="lazy" class="mobile">
           <p><em>Grist</em> (mobile)</p>
           <img src="./grist_climate_widget_mobile.png" loading="lazy" class="mobile">
           </details>
<style>
        @media only screen and (min-width: 601px) {
        #banner-div {
            width: 800px;
            max-width: 800px;
            margin-left: -75px;
     }
    }
    .mobile {
        max-width: 300px;
    }
    img {
        max-width: 100%;
        margin-bottom: 20px;
    }
</style>
