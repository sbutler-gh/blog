<script>

import { children } from "svelte/internal";

import PlainSubscribe from "/src/lib/PlainSubscribe.svelte";

// function showFeaturedVideoPlayer () {
//   // document.getElementById('featuredPreviewThumbnail').style.opacity = 0;
//   document.getElementById('featuredPreviewThumbnail').style.display = "none";
//   document.getElementById('featuredVideo').style.display = "block";
// }

</script>

<svelte:head>

  <title>Sam's Potfolio/Workshop</title>

  
  <meta name="description" content="Check out projects, essays, interactive tools, and more">
  
  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://sambutler.us/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Sam's Garage">
  <meta property="og:description" content="Check out projects, essays, interactive tools, and more">
  
  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="sambutler.us">
  <meta property="twitter:url" content="https://sambutler.us//">
  <meta property="og:title" content="Sam's Garage">
  <meta property="og:description" content="Check out projects, essays, interactive tools, and more">

</svelte:head>
<p>Welcome!  You can explore my work below, and see more experiences <a href="https://www.sambutler.us/resume.pdf">here</a>.</p>
<p>Feel free to start a conversation <a href="mailto:hello@sambutler.us">via email</a> or schedule a <a href="https://cal.com/sambutler/meet">time to chat</a>.</p>

<br>

<span class="text-gray-500 text-sm" style="display: block; margin: auto; margin-bottom: 7px; width: max-content; font-size: 14px; color: gray;">Stay up-to-date on future content
  <svg xmlns="http://www.w3.org/2000/svg" style="vertical-align: bottom;" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <polyline points="3 7 12 13 21 7" />
</svg></span>
<PlainSubscribe></PlainSubscribe>

<br>

<h2>Featured</h2>
<!-- <h3>November Updates <a href="/nov18"><em>(Explore)</em></a></h3> -->
<div id="featuredVideo" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/885749113?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>
<p>What happens when Biden declares a climate emergency and governments start taking things seriously? Start living it.</p>
<!-- <h3><em>How Social Housing Can Help Us Face the Climate Crisis — From Vienna, to Our Local Neighborhoods</em> (<a href="/social-housing-climate-crisis-vienna-neighborhoods">Read</a>)</h3>
<div id="featuredVideo" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/795386597?h=fe6bb47e59&title=0&byline=0&portrait=0&speed=0&badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div> -->
<hr>
<br>
<h3><strong>Portfolio / Workshop</strong></h3>
<div class="project-row" style="display: flex; flex-wrap: wrap;  justify-content: space-between;">

  <div class="project">
    <img src="./pgnd-cover.jpeg" loading="lazy">
    
    <a href="/peoples-green-new-deal-summary-max-ajl"><strong><em>People's Green New Deal</em> Summary</strong></a>
    
    A primer on a visionary guide for an ecosocial future, from Max Ajl.
    
    </div>

  <div class="project">
    <img src="./biden-video-thumb.jpg" loading="lazy">
    
    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7048323735505764352/"><strong>Biden Climate Speech</strong></a>
    
    A fictional video from the president, showing the policies that anybody sane would be taking during this time.
    
    </div>

  <div class="project">
    <img src="./RIDE_story_cover_image.png" loading="lazy">
    
    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7054549469144465408/"><strong>"RIDE" — A New Story</strong></a>
    
    A story about bikes, local organizing, and change — that people can tell and adapt in their own communities.
    
    </div>

  <div class="project">
  <img src="./costs-car-economy-bike-transit-image.png" loading="lazy">
  
  <a href="/costs-of-car-economy-bike-transit"><strong>Costs of the Car Economy</strong></a>
  
  The public + private costs of the car economy — and how we can change.
  
  </div>

<div class="project">
<img src="./coop_seven_principles.jpeg" loading="lazy">

<a href="/coop-template"><strong>Coop Template</strong></a>

An introduction to coops, with an interactive template. (<em>Use it!</em>)

</div>

<div class="project">
  <img src="/bioregion_thumb.png" loading="lazy">
  
  <a href="/bioregional-mapping-workshop-watersheds-ecoregions-intro"><strong>Bioregional Mapping Workshop</strong></a>
  
  Find your local bioregion, and start seeing your world in a new way.
  
  </div>

  <div class="project">
    <img src="/anti-inflationary.png" loading="lazy">
    
    <a href="https://antiinflationary.com"><strong>Anti Inflationary</strong></a>
    
    The best policies for fighting inflation and making life better.
    
    </div>

    <div class="project">
      <img src="/progress2.png" loading="lazy">
      
      <a href="https://rebrand.ly/webuild-content"><strong>Building What We Want</strong></a>
      
      A workshop to better understand what we want, and take steps to start building it.
      
      </div>

<!-- <div class="project">
<img src="https://lh3.googleusercontent.com/6gQX6G95zT1bUnk_Ug51IOCcXeuhZuXdgM2ZNIKpya6FttAoxVSyskP-5rqpkvmQeIUy5EafGYTQ5Q=w1200-h630-p">

<a href="https://rebrand.ly/liberate-homes"><strong>Liberate Homes</strong></a>

If we must work to live, how can our economies every stop growing?

</div> -->

<div class="project">
<img src="./climate-widget.png" loading="lazy">

<a href="/climate-widget-blog"><strong>Climate Widget</strong></a>

An embeddable banner, that allows people to connect with climate action anywhere on the Internet.  (<em>Looking for websites/blogs that want to pilot it.</em>)

</div>

<div class="project">
<img src="./freego_pic.png" loading="lazy">

<a href="https://freego.netlify.app"><strong>Freego</strong></a>

Pick a location, and see nearby transit stations, bikeshares, transit routes, and bike paths — go where you want, car-free. (<em>Open for input and collaboration</em>)

</div>

<div class="project">
<img src="./navi_restaurant.png" loading="lazy">

<a href="https://naviguide.netlify.app"><strong>Navi</strong></a>

An open-source and privacy-respecting alternative to Google Maps, based on Open Street Map data and the OSM api. (<em>Open for input and collaboration</em>)

</div>

<div class="project">
<img src="https://i.imgur.com/k7CqmBO.png" loading="lazy">

<a href="https://sambutler.us/community-savings"><strong>Community Savings</strong></a>

An interactive model, showing how we can make transitions and build local initiatives through the savings they create. (<em>Open for input and collaboration</em>)
</div>

<div class="project">
<img src="https://thefriend.org/assets/ugc/images/growing-pains.jpg" loading="lazy">

<a href="https://just-start.pages.dev/about"><strong>Just Start</strong></a>

See events from climate and community groups near you, so you can show up and get engaged.

</div>

<div class="project">
<img src="./spect_pic.png" loading="lazy">

<a href="https://spect.netlify.app"><strong>Spect</strong></a>

Place your perspectives, insights, and experiences on a map — and create prompts for community surveys, participatory budgeting, resource maps, and more. (<em>Open for input and collaboration</em>)

</div>

<div class="project">
<img src="https://i.imgur.com/ck3Yja2.png?fb" loading="lazy">

<a href="https://placeflow.net/welcome"><strong>Placeflow</strong></a>

Imagine the future of your community, and share visions of what your neighborhood could be. (<em>Open for input and collaboration</em>)

</div>

<div class="project">
<img src="https://lh6.googleusercontent.com/3nqQ1roSSbdatXLRQV-LTPSF-uBxYtoEra34PNXSub_tOz-Eu0zPnLmNffVSEnzPrTND3HkHv1fn_A=w1200-h630-p" loading="lazy">

<a href="https://rebrand.ly/stories-for-change"><strong>Stories of New Paradigms</strong></a>

Narratives, stories, and media to help us transcend paradigms — and give us visions to work towards. (<em>Open for input and collaboration</em>)

</div>

<div class="project">
<img src="https://c.gitcoin.co/grants/bfb81cd51aa73b308e3ce1e5e32f5310/Screen_Shot_2021-11-29_at_12.29.47_PM.png" loading="lazy">

<a href="https://rebrand.ly/solidarity-game"><strong>Solidarity and Resistance</strong></a>

Coordinating international solidarity and agency to support environmental resistance movements and land defenders.
</div>

<div class="project">
<img src="https://i.imgur.com/cSBO2CB.png" loading="lazy">

<a href="https://manyworlds.pages.dev/about"><strong>Manyworlds</strong></a>

Creating projects and initiatives together, and moving towards new ways of working along the way.
</div>

<div class="project">
<img src="https://imgur.com/TuEKpXT.png" loading="lazy">

<a href="https://situation-earth.netlify.app/"><strong>Situation Earth</strong></a>

A global situation room for environmental challenges.
</div>

<div class="project">
<img src="https://roumupdesign.com/wp-content/uploads/2019/12/ROUM_LOGO.png" loading="lazy">

<a href="https://roumupdesign.com/virtual-expo/"><strong>Roum / Mattereum Project</strong></a>

Working with Mattereum (led by Vinay Gupta) and artists on the ground in Europe (Roum) to create the first generation of Mattereum digital assets.
</div>

<div class="project">
<img src="https://referralrock.com/hub/wp-content/uploads/2020/03/blueRRicon300.png" loading="lazy">

<a href="https://referralrock.com/"><strong>Referral Rock</strong></a>

Led product and design industry-leading referral marketing software, with customers including AT&amp;T, TripAdvisor, and Random House publishing.
</div>

<div class="project">
<iframe width="200" height="200" loading="lazy" src="https://www.youtube.com/embed/E735Zio8w-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<a href="https://youtu.be/E735Zio8w-s/"><strong>Presentation at iAnno</strong></a>

Discussion of the Annotation Commons, what could go wrong, and approaches for sustainable development. <a href="https://docs.google.com/presentation/d/1T7ATWlHxhAYpId41doFIvaXbPUl0RoKb5plQmU-hJVs/edit?usp=sharing">Presentation slides</a>
</div>

<div class="project">
<img src="./timetosolve_pic.png" loading="lazy">

<a href="https://timetosolve.com/"><strong>Time to Solve</strong></a>

Building urgent solutions for climate change and the sustainable transition.
</div>


</div>
<hr>
<p>contact at sambutler dot us </p>
<p><a href="https://linkedin.com/in/sambutler8">https://linkedin.com/in/sambutler8</a></p>
<p><a href="https://twitter.com/sambutlerUS">Twitter</a>

<p style="font-style: italic; color: gray; font-size: 14px; margin-top: 15px; text-align: center;">© 2021 Sam Butler</p>

<style>

@media only screen and (min-width: 801px) {
.project-row {
  display: flex;
}
.project {
    max-width: 250px;
    margin-bottom: 40px;
}

.project img {
  background-size: 50%;
  object-fit: cover; /* Do not scale the image */
  object-position: center; /* Center the image within the element */
  height: 200px;
  width: 200px;
}
}

@media only screen and (max-width: 800px) {
.project-row {
  display: block;
}
.project {
  margin: auto;
  text-align: center;
  margin-bottom: 40px;
}

.project img {
  background-size: 50%;
  object-fit: cover; /* Do not scale the image */
  object-position: center; /* Center the image within the element */
  height: 200px;
  width: 200px;
}
}

.project > a {
  display: block;
  margin: 1em 0em;
}

/* #featuredPreviewThumbnail {
  cursor: pointer;
}

#featuredVideo {
  display: none;
} */

</style>
