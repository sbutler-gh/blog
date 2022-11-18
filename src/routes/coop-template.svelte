<script>
    export let urlparams;
    export let original;
    
    export let coop_name;
    export let project_service_name;

    export let title;
    export let description;

    let copy_tooltip = false;

    // let title = "Cooperative Approach to Sustainable Funding";
    // let description = "How cooperatives, funded by member dues, can sustainably fund projects"

    function shareProgram() {

// let window_path =  `${window.location.origin}${window.location.pathname}`

let params = `coop_name=${coop_name}&project_service_name=${project_service_name}`;

let updated_params = encodeURI(params);

let url = `${window.location.origin}${window.location.pathname}?${updated_params}`

if (!navigator.clipboard){
              // use old commandExec() way
              url.select();
              // window.location.setSelectionRange(0, 99999)
              document.execCommand("copy");
              copy_tooltip = true;
              setTimeout(function(){ copy_tooltip = false }, 2000)

          } else{
              navigator.clipboard.writeText(url).then(
                  function(){
                      console.log("Copied URL");
                      copy_tooltip = true;
                      setTimeout(function(){ copy_tooltip = false }, 2000)
                  })
                  .catch(
                  function() {
                      console.log("Couldn't copy, try right-clicking to copy the URL isntead."); // error
                  });
          }  
}
</script>

<script context="module">
    export const load = async ({ url, params }) => {

      console.log(url);
      console.log(params);
      let urlparams = [];
      let original = true;

        // If there is a parameter in the URL;
        if (url.search) {

          console.log('hit');
          original = false;
          // const params = Object.fromEntries(urlSearchParams.entries());
        let str = new URLSearchParams(url.search);
        urlparams = Object.fromEntries(str.entries());
        console.log(urlparams);

      if (!urlparams.coop_name) {
        urlparams.coop_name = "[Insert cooperative name]"
      }

      if (!urlparams.project_service_name) {
        urlparams.project_service_name = "[insert project/service]";
      }    

      urlparams.title = `Coop template for ${urlparams.coop_name}`;
      urlparams.description = `How ${urlparams.coop_name} can be sustainably funded as a cooperative`;

        }

        else {
            urlparams.coop_name = "[Insert cooperative name]"
            urlparams.project_service_name = "[insert project/service]";
            urlparams.title = "Cooperative Approach to Sustainable Funding";
            urlparams.description = "How cooperatives, funded by member dues, can sustainably fund projects";
        }

      return {
				props: { 
          params: urlparams,
          coop_name: urlparams.coop_name,
          project_service_name: urlparams.project_service_name,
          title: urlparams.title,
          description: urlparams.description,
          original: original
        }
			};
    }
</script>

<svelte:head>

  {#if !original}
  <title>{title}</title>

  
  <meta name="description" content="{description}">
  
  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://sambutler.us/community-savings/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{description}">
  <meta property="og:image" content="https://i.imgur.com/k7CqmBO.png">
  
  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="sambutler.us">
  <meta property="twitter:url" content="https://sambutler.us/community-savings/">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{description}">
  <meta name="twitter:image" content="https://i.imgur.com/k7CqmBO.png">
  {:else}
  <title>{title}</title>

  
  <meta name="description" content="{description}">
  
  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://sambutler.us/coop-template">
  <meta property="og:type" content="website">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{description})">
  <meta property="og:image" content="https://i.imgur.com/k7CqmBO.png">
  
  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="sambutler.us">
  <meta property="twitter:url" content="https://sambutler.us/coop-template">
  <meta name="twitter:title" content="{title}">
  <meta name="twitter:description" content="{description})">
  <meta name="twitter:image" content="https://i.imgur.com/k7CqmBO.png">
  {/if}

</svelte:head>

<article class="h-entry">
    <h1 class="p-name"><a class="u-url" href="/coop-template">Cooperative Approach to Sustainable Funding</a></h1>
    <p style="font-style: italic">Sam Butler (November 7th, 2022)</p>
    <div class="e-content">   

<p>In contrast to paid services where you are a customer, and free services which are often unsustainable, there is another way to fund important projects.</p>

<p>A cooperative.  People pay recurring dues of be a member of the cooperative.  This gives them a vote in the project's operation (e.g. how to use available funds, setting priorities) on a one-person, one-vote basis.  These aren't customers — these are people, who cooperatively own and build a project, for their own interest in using it.</p>

<p>That means as a project succeeds, people aren't looking for a financial return.  Their return is being able to enjoy a better and better project, at more and more affordable costs.  <strong>The means is the end.  The return is intrinsic.</strong></p>

<p>What that means, specifically, is up to the cooperative to decide!  Do we want to put out dues towards making the service more affordable, and lowering our dues?  Do we want to put our dues towards making the project better for ourselves? Do we want to put our dues towards expanding equitable access to the project — e.g. subsidizing membership and services, in the spirit of equity and justice?</p>

<p>In many cases, all of these can go together.  As a project gets better, and more people join, the cost of providing the services for each member (often) can decline — creating more available funding, to put towards efforts the members cooperatively decide.</p>


<p></p>

<h4>Here is a template for a cooperative approach to funding public interest projects. This should probably be adjusted to fit different project / community contexts.</h4>

<p><strong><input bind:value={coop_name} style="width: {coop_name.length * Math.log(1000)}px" placeholder="Cooperative name"></strong> exists to provide <strong><input bind:value={project_service_name} style="width: {project_service_name.length * Math.log(1000)}px" placeholder="Cooperative name"></strong>  to everybody in the world, equitably and without profit interests.</p>

<p>How does it work?</p>

<p>People pay monthly dues to join the cooperative. This gives them a vote in the cooperative's operation (one person, one vote), and likewise gives them access to <strong>{project_service_name}</strong>, which they would pay a subscription for otherwise.</p>

<!-- <p>As the cooperative grows, the marginal cost for providing services to each member declines.  -->
    
    <p>Surplus funds can be <em>invested in the project's development</em>, <em>providing services to people free of charge</em> (in alignment with the equity mission), and <em>lowering the cost of the services for members</em>.</p>

<p>Those who join the cooperative should understand it is not to create dividends or serve as an investment, and profits will not be distributed.</p>

<p>Rather, the cooperative's purpose is to sustainably fund a service that we want in our lives. By working together, we can 1) improve that service (through collective funding and effort), 2) make the service more affordable (through decreasing marginal costs), and 3) equitably expand access to the service (through decreasing marginal costs).</p>

<p>It's concievable, at some point in the future, that the cooperative's success could make the service close to free! And what would be better than that &mdash; a tool/service that we enjoy and depend on in our lives, and having it almost for free?</p>

<p>Of course, that would be variable.  If members of the cooperative voted to increase funding and investment in the project, we could also democratically choose to raise dues and explore other avenues to do so.  By the same token, we could democratically choose to lower member dues at a point in time, if we wish.</p>

<p>This, in essence is the North Star of <strong>{coop_name}</strong>.  If you want to join the journey – we'll go far together.</p>

<button type="button" class="share" on:click={shareProgram}>Share Your Template</button>

{#if copy_tooltip}
<span style="width: fit-content; font-size: 14px; display: block; margin: auto; margin-top: 10px; font-style: italic;">Copied Link!</span>
{/if}
</div>
</article>

<style>
    .share {
      border-radius: 20px;
      border-radius: 20px;
      color: white;
      border: none;
      /* background: #2d97a5; */
      background: darkorchid;
      padding: 0.5em 1em;
      margin-top: 20px;
      font-size: 16px;
      cursor: pointer;
      /* float: right; */
      /* height: 40px; */
      display: block;
      margin: auto;
      box-shadow: 3px 3px 1px 1px lightpink;
    }
    </style>

<!-- 
    
Other notes, from past writings and thoughts:

    And what is better than that — a tool/service that we enjoy our lives, and having it freely available?

At some point, it's concievable that that the project may not need further technical development — 

The purpose of this cooperative is not to create dividends for collective, shared owners or serve as a profitable investment.

Rather, it is to collectively fund a service that we want in our lives — for no reason other than our wish to use the service — 

re-invested in the project's development, provide services to communities free of charge (in alignment with the project's mission), 

You can join the cooperative by contributing [a flexible monthly due starting at $10], and in joining, you recieve:

* A vote in the governance and priorities of the project (one person, one vote)

* Access to smallweb services, which you would otherwise have to pay for (unless self-hosting)

Members of the small web cooperative collectively decide how to use the project's funding (e.g. all of their member dues) towards the coop's mission, of providing small web tech to everyone in the world, equitably and without profit interests.

In some cases, there may be a surplus of funds available.  In some cooperative structures, members of the coop could choose to distribute these funds among the membership.

Given that small web cooperative does not have a profit interest, the cooperative will use surplus funds to provision services/usufruct (not dividends) to its membership — or dedicate that funding towards the advancement of the project.

The coop's funds may typically be used to: pay for work on the project, infrastructure costs, and administrative costs.

I've been thinking lately about a platform coop with a goal of providing communications as a basic server/infrastructure for everybody in the world, at as low cost as possible.  Essentially:

Platform Coop

^ Provisioners of Matrix Servers pay some profits to the platform coop.

^^ Server maintainers pay a fair amount to server provisioners

^^^ Individual server accounts pay a fair amount to server maintainers

And the platform coop shares profits with member stakeholders (e.g. provisioners, maintainers, perhaps individuals), towards the outcome of providing communications access to everybody in the world for as little cost as possible.

As more people join, marginal costs go down, and thus the infrastructure becomes cheaper for everybody.

What GoMatrixHosting is doing makes this feasible, it just seems like their project lead wants to run a small business, and isn't interested in the coop direction.

But the main maintainer/technical lead for that project is open to coop stuff.  And it's open source, so it wouldn't be a blocker in any case, but yeah — the core maintainer and the community definitely seems to vibe in the coop direction.

Also, the point of introducing the server provisioners is to lower the barrier to entry for people who wish to manage their own servers — enabling non-technical people can manage their own servers too.


Joining the cooperative gives you a vote (one-person one-vote) in the governance and priorities of the project.  

You can join the cooperative by paying a monthly due.

[Name of project] cooperative exists to provide [project technology]s= -->