<script>

  import supabase from "$lib/db.js";
import WelcomePopup from "$lib/WelcomePopup.svelte";
import { onMount } from "svelte";


// You want to raise ______ to build a _____.  

// [ Sell future credits ]

  export let urlparams;
  export let original;

  let welcome_popup = false;

  let copy_tooltip = false;


 let title = "Community Savings Program";

 export let community;

 export let service;
 export let infrastructure;
 export let capital;
 export let users;
 export let users_per_month;
 export let use_cost;

 export let percent_savings_shared;

 export let payback_years;

 export let per_time_unit;

 export let per_time_unit_label;

 export let percent_savings;

 export let cost_per_user;

 export let dollar_savings_kept;

//  $: per_time_unit_label;

$: max_dollar_savings = use_cost * (percent_savings/100);

$: dollar_savings_shared = max_dollar_savings - dollar_savings_kept;

$: community_cost_annual = use_cost * users_per_month * per_time_unit;

$: total_savings = community_cost_annual * (percent_savings/100);

$: yearly_return = total_savings * ((max_dollar_savings - dollar_savings_kept) / max_dollar_savings);

//  $: yearly_return = total_savings * (percent_savings_shared/100);

 $: absolute_return = yearly_return * payback_years;

 $: capital_calculation = cost_per_user * users_per_month;

 $: roi = ((absolute_return - (cost_per_user * users_per_month)) / (cost_per_user * users_per_month)) * 100;

 $: arr = roi / payback_years;

 $: new_absolute_return = dollar_savings_shared * per_time_unit * payback_years;

 $: fvi = dollar_savings_shared * per_time_unit * payback_years;

 $: ivi = cost_per_user;

 $: new_roi = (fvi - ivi) / ivi;

//  $: average_annual_profit = fvi / payback_years;

//  $: new_arr = (average_annual_profit / fvi) * 100;

$: new_arr = (new_roi / payback_years) * 100;


//  $: new_roi1 = ((new_absolute_return - cost_per_user) / cost_per_user) * 100

//  $: new_roi = ((dollar_savings_shared * payback_years) / cost_per_user) * 100;

//  $: new_arr2 = (dollar_savings_shared * per_time_unit * payback_years) /
 
//  $: new_arr = (cost_per_user / dollar_savings_shared) * payback_years;

 let profile_form = false;
 let new_user;

 onMount(() => {

  console.log(original);

//   // If there is a parameter in the URL;
    if (!original) {

      // service = params.service;
      // infrastructure = params.infrastructure;
      // capital = params.capital;
      // users = params.users;
      // users_per_month = params.users_per_month;
      // use_cost = params.use_cost;

      // percent_savings_shared = params.percent_savings_shared;

      // payback_years = params.payback_years;

      // per_time_unit = parseInt(params.per_time_unit);

      // percent_savings = params.percent_savings;

 document.getElementsByClassName("program")[0].scrollIntoView({behavior: 'smooth'});

//  per_time_unit_label = document.getElementsByTagName("option")[document.getElementById("select_time_unit").selectedIndex].label


// //  welcome_popup = true;

// //  setTimeout(function () {
// //    welcome_popup = false;
// //  }, 10000)
  }
  else {
    ipToCoordinates();
  }

// var search = str;
// console.log(search);
// let params2 = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) });

// console.log(params2);

 })

 async function ipToCoordinates() {


const ip = await fetch("https://serene-journey-42564.herokuapp.com/https://api.ipify.org?format=json&callback=getIP");

const ip_json = await ip.json();
console.log(ip_json);

const request = await fetch(`https://serene-journey-42564.herokuapp.com/ipinfo.io/${ip_json["ip"]}/geo?token=${import.meta.env.VITE_IP_INFO_KEY}`, {
    method: 'GET',
    "Content-Type": "application/json",
    "charset": "utf-8",
    "Access-Control-Allow-Headers": "X-Requested-With",
    "X-Requested-With": "XMLHttpRequest"   
});

const json = await request.json()

// community = json.city;

console.log(json);

community = json.region;

// coordinates = json.loc.split(',');
// console.log(coordinates);
// coordinates = {"lat": coordinates[0], "lng": coordinates[1]};


// city = json.city;
// country = json.country;
// geocoder_input = `${city}, ${country}`;
// postal = json.postal;
// content = true

}

 async function addEmail(e) {

let formData = new FormData(e.target);

profile_form = true;

let random_password = Math.random().toString(36).substr(2, 8);

const { data, error } = await supabase.auth.signUp(
  { email: formData.get('email'),
    password: random_password })
if (data) {
  console.log(data);
  new_user = data;
  return data;
}
else {
  console.log(error);
  localStorage.setItem('email', formData.get('email'));
}
}

async function addProfileInformation(e) {

let formData = new FormData(e.target);

// console.log(formData.get('email'));

console.log([...formData]);

if (new_user) {
  const { data, error } = await supabase
  .from('profiles')
  .update([
    {
        full_name: formData.get('full_name'),
        introduction: formData.get('introduction'),
        website_url: formData.get('website_url'),
        linkedin_url: formData.get('linkedin_url'),
        twitter_handle: formData.get('twitter_handle'),
        contact_method: formData.get('contact_method')
    },
  ])
  .eq('user_id', new_user.id)

  if (data) {
    console.log(data);
    // let new_user = data;
    profile_form = "submitted";
    return data;
  }
  else {
    console.log(error);
  }
}

else {
  let random_password = Math.random().toString(36).substr(2, 8);

  const { data, error } = await supabase.auth.signUp(
    { email: localStorage.getItem('email'),
      password: random_password },
    {
      data: {
        full_name: formData.get('full_name'),
        introduction: formData.get('introduction'),
        website_url: formData.get('website_url'),
        linkedin_url: formData.get('linkedin_url'),
        twitter_handle: formData.get('twitter_handle'),
        contact_method: formData.get('contact_method')
    }
  })
  if (data) {
    console.log(data);
    // let new_user = data;
    profile_form = "submitted";
    return data;
  }
  else {
    console.log(error);
  }
}
}

function shareProgram() {

  // let window_path =  `${window.location.origin}${window.location.pathname}`

  let params = `service=${service}&infrastructure=${infrastructure}&cost_per_user=${cost_per_user}&capital=${capital}&users=${users}&users_per_month=${users_per_month}&use_cost=${use_cost}&percent_savings_shared=${percent_savings_shared}&payback_years=${payback_years}&per_time_unit=${per_time_unit}&percent_savings=${percent_savings}&community=${community}&dollar_savings_kept=${dollar_savings_kept}`;

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
        urlparams.users = urlparams.users.charAt(0).toUpperCase() + urlparams.users.slice(1);
      // service = params.service;
      // infrastructure = params.infrastructure;
      // capital = params.capital;
      // users = params.users;
      // users_per_month = params.users_per_month;
      // use_cost = params.use_cost;

      // percent_savings_shared = params.percent_savings_shared;

      // payback_years = params.payback_years;

      // per_time_unit = parseInt(params.per_time_unit);

      // percent_savings = params.percent_savings;


      //  welcome_popup = true;

      //  setTimeout(function () {
      //    welcome_popup = false;
      //  }, 10000)

      if (!urlparams.community) {
        urlparams.community = "our community"
      }

      if (!urlparams.cost_per_user) {
        urlparams.cost_per_user = urlparams.capital / urlparams.users_per_month;
      }

      if (!urlparams.per_time_unit_label) {
        urlparams.per_time_unit == 1 ? urlparams.per_time_unit_label = "per year" : null
        urlparams.per_time_unit == 12 ? urlparams.per_time_unit_label = "per month" : null
        urlparams.per_time_unit == 52 ? urlparams.per_time_unit_label = "per week" : null
        urlparams.per_time_unit == 365 ? urlparams.per_time_unit_label = "per day" : null
        urlparams.per_time_unit == 8760 ? urlparams.per_time_unit_label = "per hour" : null
      }

      if (!urlparams.dollar_savings_kept) {
        urlparams.dollar_savings_kept= (urlparams.use_cost * (urlparams.percent_savings/100)) / 2;
      }
      

        }

        else {
          urlparams.community = "our community"
          urlparams.service = "energy"
          urlparams.infrastructure = "community microgrid"
          urlparams.capital = 4000000;
          urlparams.users = "Homes";
          urlparams.users_per_month = 1000;
          urlparams.use_cost = 2000;

          urlparams.percent_savings_shared = 50;

          urlparams.payback_years = 12.5;

          urlparams.per_time_unit = 1;
          
          urlparams.per_time_unit_label = "per year";

          urlparams.percent_savings = 40;
          
          urlparams.cost_per_user = 4000;

          urlparams.dollar_savings_kept= (urlparams.use_cost * (urlparams.percent_savings/100)) / 2;
        }

      return {
				props: { 
          params: urlparams,
          community: urlparams.community,
          service: urlparams.service,
          infrastructure: urlparams.infrastructure,
          capital: urlparams.capital,
          users: urlparams.users,
          users_per_month: urlparams.users_per_month,
          use_cost: urlparams.use_cost,
          percent_savings_shared: urlparams.percent_savings_shared,
          payback_years: urlparams.payback_years,
          per_time_unit: parseInt(urlparams.per_time_unit),
          per_time_unit_label: urlparams.per_time_unit_label,
          percent_savings: urlparams.percent_savings,
          cost_per_user: urlparams.cost_per_user,
          dollar_savings_kept: urlparams.dollar_savings_kept,
          original: original
        }
			};
    }
</script>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/npm/d3plus-text@1"></script>

  {#if !original}
  <title>{infrastructure.charAt(0).toUpperCase()}{infrastructure.slice(1)} (Community Savings)</title>

  
  <meta name="description" content="Building Back Better w/ Community Savings (That Pay for Themselves)">
  
  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://sambutler.us/community-savings/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="{infrastructure.charAt(0).toUpperCase()}{infrastructure.slice(1)} (Community Savings)">
  <meta property="og:description" content="Pays for itself in {payback_years} years and saves {percent_savings}% on {service}">
  <meta property="og:image" content="https://i.imgur.com/k7CqmBO.png">
  
  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="sambutler.us">
  <meta property="twitter:url" content="https://sambutler.us/community-savings/">
  <meta property="og:title" content="{infrastructure.charAt(0).toUpperCase()}{infrastructure.slice(1)} (Community Savings)">
  <meta property="og:description" content="Pays for itself in {payback_years} years and saves {percent_savings}% on {service}">
  <meta name="twitter:image" content="https://i.imgur.com/k7CqmBO.png">
  {:else}
  <title>Community Savings</title>

  
  <meta name="description" content="Building Back Better w/ Community Savings (That Pay for Themselves)">
  
  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://sambutler.us/community-savings/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Community Savings">
  <meta property="og:description" content="Building Back Better w/ Community Savings (That Pay for Themselves)">
  <meta property="og:image" content="https://i.imgur.com/k7CqmBO.png">
  
  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="sambutler.us">
  <meta property="twitter:url" content="https://sambutler.us/community-savings/">
  <meta name="twitter:title" content="Community Savings">
  <meta name="twitter:description" content="Building Back Better w/ Community Savings (That Pay for Themselves)">
  <meta name="twitter:image" content="https://i.imgur.com/k7CqmBO.png">
  {/if}
  <!-- <script>
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_1vs44o3mad3tUwqV5nR6zO8sRwuC5HepCh696Jl2gWr',{api_host:'https://app.posthog.com'})
</script> -->
</svelte:head>

<article class="h-entry">

<!-- <h3 class="p-name">Building Back Better w/ Community Savings (That Pay for Themselves)</h3> -->
<h2 class="p-name">Building Back Better<br>with Community Savings</h2>

    <div class="e-content">

      <!-- {#if welcome_popup}
      <div class="modal_background_dim" on:click={function() {welcome_popup = false}}></div>
      <WelcomePopup on:closeintromodal={function() {welcome_popup = false;}}></WelcomePopup>
      {/if} -->


        <div class="embed-youtube">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/v4QuphODK-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <details><summary style="font-size: 14px;">References</summary>
              <div class="footnotes">
                <p>1. A 1MW grid, capable of powering <a href="https://www.nwcouncil.org/reports/columbia-river-history/megawatt" target="_blank">powers 600+ homes</a>, costs <a href="https://www.nrel.gov/docs/fy19osti/67821.pdf" target="_blank">$2.1 million</a>.  Calculation for 1000 homes is based on 2MW of power at $4 million.</p>
                <p>2. Microgrids save an average of <a href="https://www.ase.org/blog/microgrids-resilience-yes-dont-overlook-their-efficiency-potential" target="_blank"> 5% in transmission</a> (and can save as much to 30%), by lowering the distance that electricity travels to your home.  Further energy savings can come from lower prices of renewable energy generation — savings are more profound <a href="https://blogs.constellation.com/energy-management/how-energy-technology-may-reduce-consumption-and-spend-a-look-at-microgrids/" target="_blank">where energy prices are higher today.</a> (Also see: <a href="https://www.renewableenergyworld.com/solar/new-research-shows-transitioning-to-100-clean-energy-could-save-us-households-321b/" target="_blank">analysis of Rewiring America report</a>)</p>
  
              </div>
            </details>

            <div class="register register-2">
              {#if profile_form == true}
              <form class="profile-form" on:submit|preventDefault={addProfileInformation}>
                <p style="font-weight: bold;">About You — A Few More Details</p>
                <!-- <label>Email</label> -->
                <div>
                <label for="full_name">Name</label>
                <input style="padding: 0.5rem;" autofocus type="text" name="full_name" placeholder=""><br>
                </div>
        
                <!-- <div>
                  <label for="what_i_do">What do you do?</label>
                  <input style="padding: 0.5rem;" type="text" name="what_i_do" placeholder="I'm a ..."><br>
                  </div> -->
        
                  <div>
                    <label for="introduction">Introduce yourself and your interests in Community Savings</label>
                    <textarea type="text" name="introduction" placeholder=""></textarea><br>
                    </div>
        
                <!-- <div>
                  <label for="interests">What are your interests in Community Savings programs?</label>
                  <textarea style="padding: 0.5rem;" type="text" name="interests" placeholder=""></textarea><br>
                  </div> -->
        
                  <div>
                    <label for="website_url">Website / Personal Page</label>
                    <input style="padding: 0.5rem;" type="url" name="website_url" placeholder="https://..."><br>
                  </div>
        
                  <div>
                    <label for="linkedin_url">LinkedIn</label>
                    <input style="padding: 0.5rem;" type="url" name="linkedin_url" placeholder="https://..."><br>
                  </div>
        
                  <div>
                    <label for="twitter_handle">Twitter Handle</label>
                    <input style="padding: 0.5rem;" type="text" name="twitter_handle" placeholder="mytwittername"><br>
                  </div>
        
        
                  <!-- <div>
                    <label for="site_url">GitHub Handle</label>
                    <input style="padding: 0.5rem;" type="text" name="twitter_url" placeholder="mygithubname"><br>
                  </div> -->
        
                  <div>
                    <label for="contact_method">What's the best way to contact you?</label>
                    <!-- <label style="font-size: 14px; padding-bottom: 2px;">If you want to chat ...</label> -->
                    <textarea type="text" name="contact_method" placeholder="e.g. Message on me Signal at +1 555 555 5555 or via email at hey@example.com"></textarea>
                  </div>
        
                  <!-- <div>
                    <label for="name">LinkedIn URL</label>
                    <input style="padding: 0.5rem;" type="url" name="name" placeholder="https://linkedin.com/in/..."><br>
                  </div>
        
                  <div>
                    <label for="name">Twitter Handle</label>
                    <input style="padding: 0.5rem;" type="url" name="name" placeholder="https://twitter.com/..."><br>
                  </div>
        
                  <div>
                    <label for="name">GitHub Handle</label>
                    <input style="padding: 0.5rem;" type="url" name="name" placeholder="https://github.com/..."><br>
                  </div> -->
                <button style="margin-left: auto;">Finish</button>
              </form>
              {:else if profile_form == false}
            <form class="email-form" on:submit|preventDefault={addEmail}>
              <p style="font-weight: bold;">Enter your email to collaborate and recieve updates</p>
              <!-- <label>Email</label> -->
              <input style="padding: 0.5rem;" autofocus type="email" name="email" placeholder="Your Email (hey@example.com)">
              <button>Submit</button>
            </form>
            {:else if profile_form == "submitted"}
            <div class="success-alert" style="background: #d1ffd1; color: #094609fc; padding: 5px 10px;">
              <div style="text-align: center; margin: auto;"><p>Success!</p>
              <p>Keep an eye out for updates.  In the meantime, you can <a class="success-link" href="mailto:sam@sambutler.us" style="color: #003cff;">send us an email</a>, share this page, and try the tool below!</p></div>
            </div>
              {/if}
            </div>

<div class="program">
  <!-- <div style="display: inline-flex">
<h4 style="padding-left: 10px">Create your own Community Savings Program</h4>
<button class="share" on:click={shareProgram}>Share Your Program</button>
</div> -->
<h4 id="" style="padding-left: 10px">Create your own Community Savings Program</h4>
<form class="variablesForm2" style="border-radius: 5px; padding: 0px 10px;">
<!-- <input bind:value={title} style="font-size: 20px;"> -->
<p><input style="display: inline-block; width: {users.length * 12}px; min-width: 30px;" name="users" bind:value={users} placeholder="users" type="text"> in <input style="display: inline-block; width: {community.length * Math.log(14000)}px; min-width: 30px;" name="community" bind:value={community} placeholder="community" type="text"> pay $<input class="" bind:value={use_cost} style="display: inline-block; width: {use_cost.toString().length * 11}px; min-width: 30px;" name="use_cost" placeholder="use cost"> <select id="select_time_unit" bind:value={per_time_unit} on:change={function(e) { console.log(e); per_time_unit_label = e.target.selectedOptions[0].label; console.log(per_time_unit_label) }}><option label="per month" value={12}>per month</option><option label="per year" value={1}>per year</option><option label="per week" value={52}>per week</option><option label="per day" value={365}>per day</option><option label="per hour" value={8760}>per hour</option></select> for <input style="width: 70px; display: inline-block; width: {service.length * Math.log(14000)}px; min-width: 30px;" name="service" bind:value={service} placeholder="{service}">. <br> <br><span style="visibility: hidden; height: 0px; display: none;">With <input style="display: inline-block; width: {users_per_month.toString().length * 11}px; min-width: 30px;" name="users_per_month" bind:value={users_per_month} placeholder="users per month"> {users.toLowerCase()} in {community}, all together, we spend <strong>${community_cost_annual.toLocaleString()} per year on {service}</strong>.
  <br>
<br>
</span>
With a <input name="infrastructure" style="display: inline-block; width: {infrastructure.length * Math.log(14000)}px; min-width: 30px;" bind:value={infrastructure} placeholder="">, {users.toLowerCase()}  in {community} could save
<span class="range-div">{percent_savings}%<input type="range" bind:value={percent_savings} min={0} max={100}></span> on {service}
—
<!-- creating <strong>${total_savings.toLocaleString()}</strong> in savings every year. -->
as much as <strong>${max_dollar_savings.toLocaleString()} in savings {per_time_unit_label}</strong>.
<br>
<br>
If a {infrastructure} costs $<input bind:value={cost_per_user} style="display: inline-block; width: {cost_per_user.toString().length * 11}px; min-width: 30px;" name="cost_per_user" placeholder="XXXXX.XX"> per {users.toLowerCase().slice(0,-1)}<!-- (${(users_per_month * cost_per_user).toLocaleString()} total) --><!-- , and creates <strong>${total_savings.toLocaleString()}</strong> in savings per year, -->, every {users.toLowerCase().slice(0,-1)} can save
<!-- <span class="range-div">{percent_savings_shared}% <input type="range" bind:value={percent_savings_shared} min={0} max={100}></span>  -->

<span class="range-div">${dollar_savings_kept} <input type="range" bind:value={dollar_savings_kept} min={0} max={max_dollar_savings}></span>

<span style="font-weight: 600">{per_time_unit_label}</span> and pay back the {infrastructure} in <span class="range-div">{payback_years}<input type="range" bind:value={payback_years} min={0} max={100}></span> years — giving the project a <input style="display: none;" type="range" bind:value={new_arr} min={0} max={100}><strong>{new_arr.toFixed(2)}% annual rate of return. {#if new_arr.toFixed(2) > 0}
  <svg xmlns="http://www.w3.org/2000/svg" class="return-check icon icon-tabler icon-tabler-circle-check" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="#56e156" style="vertical-align: bottom:" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <circle cx="12" cy="12" r="9" />
    <path d="M9 12l2 2l4 -4" />
  </svg>
  {/if}</strong>
<br><br>
And from then on, {users.toLowerCase()} enjoy a full <strong>${max_dollar_savings} in savings {per_time_unit_label}</strong> with a {infrastructure}.
<!-- And from then on, {users.toLowerCase()} save <strong>${max_dollars_savings_shared}</strong> {per_time_unit_label} and a full <strong>${total_savings.toLocaleString()} in yearly savings</strong> in {community}. -->
<br>
<br>
<button type="button" class="share" on:click={shareProgram}>Share Your Result</button>
</p>
{#if copy_tooltip}
<span style="width: fit-content; display: block; margin: auto; margin-top: 5px; white-space: nowrap; background: lightgrey; text-align: center; border-radius: 20px; padding: 5px; box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);" class="bg-gray-100 text-center rounded absolute p-1 shadow">Copied Link!</span>
{/if}
</form>
</div>

</div>
</article>

<style>
  .share {
    border-radius: 20px;
    border-radius: 20px;
    color: white;
    border: none;
    background: #2d97a5;
    padding: 0.5em 1em;
    margin-top: 20px;
    font-size: 16px;
    cursor: pointer;
    /* float: right; */
    /* height: 40px; */
    display: block;
    margin: auto;
  }
.program {
    border: solid 1px black;
    padding: 2px 10px;
    border-radius: 10px;
    margin-top: 30px;
}
.program input {
  border: none;
  border-bottom: solid 1px grey;
  height: 1.5rem;
  font-size: 18px;
}

.program .range-div {
    display: inline-grid; 
    text-align: center; 
    font-weight: 600; 
    position: relative;
    height: 40px;
    margin-right: 4px;
}
.program input[type="range"] {
    height: 0.5rem;
    width: 70px;
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%);
}

.email-form {
    margin: 10px 0px;
}

@media only screen and (max-width: 800px) {

/* .register button {
  margin: auto;
  text-align: center;
}

.profile-form {
  width: 100%;
} */

.embed-youtube {
position: relative;
padding-bottom: 56.25%; /* - 16:9 aspect ratio (most common) */
/* padding-bottom: 62.5%; - 16:10 aspect ratio */
/* padding-bottom: 75%; - 4:3 aspect ratio */
padding-top: 30px;
height: 0;
overflow: hidden;
width: 100%;
}

.embed-youtube iframe,
.embed-youtube object,
.embed-youtube embed {
border: 0;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}

.profile-form, .success-alert, .footnotes {
  width: 95%;
}

.p-name {
  width: 100%;
  text-align: center;
}

}

@media only screen and (min-width: 801px) {

  .profile-form, .success-alert {
      width: 75%;
  }

  .p-name {
  width: 80%;
  text-align: center;
}

.footnotes {
  width: 85%;
}
}

.register {
      /* padding: 20px 20px; */
      border-radius: 10px;
      /* border: solid black 1px; */
      /* background: ghostwhite; */
      /* background: white; */
      /* width: 50%; */
    }

    .register-2 {
      /* text-align: center; */
      margin: 20px auto;
      /* box-shadow: 0 -1px 10px rgb(0 0 0 / 5%), 0 1px 4px rgb(0 0 0 / 10%), 0 10px 30px #f3ece8; */
    }

    .register-2 input:focus {
      border-color: #a4d2ff;
      box-shadow: 0 0 6px rgb(27 106 201 / 50%);
      outline: none;
    }

    .register-2 input {
      /* margin: auto; */
      width: 80%;
    }

    .profile-form {
      border-radius: 10px;
      padding: 10px;
      box-shadow: 0 -1px 10px rgb(0 0 0 / 5%), 0 1px 4px rgb(0 0 0 / 10%), 0 10px 30px #f3ece8;
      /* text-align: center; */
      /* margin: auto; */
    }

    .email-form input {
      /* margin: auto !important; */
    }

    .profile-form input {
      max-width: 50%;
    }

    .profile-form textarea {
      height: 70px;
      width: 95%;
    }

    .profile-form div {
      text-align: left;
      margin: 0 !important;
      width: 100%;
    }

    .profile-form label {
      font-size: 16px;
    }

    .register-2 button {
      border-radius: 20px;
      color: white;
      border: none;
      background: #2da562;
      padding: 0.5em 2em;
      margin-top: 10px;
      /* text-align: center;
      margin-left: auto; */
      /* padding: 5px 10px; */
      /* width: 30%; */
      font-size: 16px;
      cursor: pointer;
    }

    .register label, .register input, .register button, .register textarea {
      display: block;
    }

    .register input {
      box-sizing: border-box;
      font-size: 16px;
      line-height: 1.5rem;
      padding: 1px 2px;
    }

    .register input {
      padding: 3px 3px;
    }

    .register textarea, .register input {
      border-radius: 5px;
      /* background: #fbfbfb; */
      border: solid lightgrey 1px;
    }

    .success-link:hover {
      border-bottom: solid 1px #003cff;
      text-decoration: none;
    }

    .footnotes {
      font-size: 14px;
      background: #f8f8f8;
      padding: 2px 10px;
      border-radius: 10px;
    }
</style>