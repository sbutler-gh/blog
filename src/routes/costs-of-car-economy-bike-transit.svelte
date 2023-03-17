<script>
  import PlainSubscribe from "/src/lib/PlainSubscribe.svelte";
  import ShareButton from "/src/lib/ShareButton.svelte";
</script>
<svelte:head>
<title>Costs of the Car Economy (and moving to Bikes and Transit)</title>


<meta name="description" content="Exploring the public and private costs of the car economy, and comparing to the bike and transit economy">

<!-- Facebook Meta Tags -->
<meta property="og:url" content="https://sambutler.us/costs-of-car-economy-bike-transit">
<meta property="og:type" content="website">
<meta property="og:title" content="Costs of the Car Economy (and moving to Bikes and Transit)">
<meta property="og:description" content="Exploring the public and private costs of the car economy, and comparing to the bike and transit economy">
<meta property="og:image" content="https://sambutler.us/costs-car-economy-bike-transit-image.png">

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta property="twitter:domain" content="sambutler.us">
<meta property="twitter:url" content="https://sambutler.us/costs-of-car-economy-bike-transit">
<meta property="og:title" content="Costs of the Car Economy (and moving to Bikes and Transit)">
<meta property="og:description" content="Exploring the public and private costs of the car economy, and comparing to the bike and transit economy">
<meta name="twitter:image" content="https://sambutler.us/costs-car-economy-bike-transit-image.png">
</svelte:head>

<article class="h-entry">
  <h1 class="p-name"><a class="u-url" href="/costs-of-car-economy-bike-transit">Costs of the Car Economy</a></h1>
  <!-- <p style="font-style: italic">Sam Butler (February 2ndth, 2022 at 11:45am CEST)</p> -->
  <div class="e-content">

    <img src="./costs-car-economy-bike-transit-image.png" loading="lazy" style="max-width: 100%">

    <span class="text-gray-500 text-sm" style="width: max-content; font-size: 14px; color: gray; text-align: center; display: block; margin: auto;">Recieve future content like this
      <svg xmlns="http://www.w3.org/2000/svg" style="vertical-align: bottom;" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg></span>
        <PlainSubscribe></PlainSubscribe>
<br>
<p>According to a <a href="https://news.harvard.edu/gazette/story/2020/01/massachusetts-car-economy-costs-64-billion-study-finds/#:~:text=A%20team%20of%20graduate%20students,that%20coming%20from%20public%20funds.">2019 study by Harvard</a>, the public cost of  the car economy is $5,645 per person per year.  (The private cost is $6,000/year per car.)</p>

<details><summary>Together, the cost of maintaining the U.S. car economy is <strong>$3.5 trillion per year.</strong></summary>
  <ul>
    <li>
      331.9 million people x $5,645 public costs = $1.87 trillion per year.
    </li>
    <li>
      272 million cars x $6,000 private costs = $1.63 trillion per year.
    </li>
    <li>
      $1.87 trillion + $1.63 trillion = $3.5 trillion per year.
    </li>
  </ul>
</details>

<p>In the communities with significant bike infrastructure, the public cost is $150 per person per year. (The private cost is $500/year per bike.)</p>

<p>In the communities significant public transit, the operating costs are $1,230 per person per year. (The private cost of transit is $720/year per rider).</p>

<details><summary>Together, the cost of a bike and transit economy in the U.S. is <strong>$0.862 trillion per year.</strong></summary>
  <ul>
    <li>
      331.9 million people x $650 public + private bike costs = $0.215 trillion per year.
    </li>
    <li>
      331.9 million people x $1950 public + private transit costs = $0.647 trillion per year.
    </li>
    <li>
      $0.215 trillion + $0.647 trillion = $0.862 trillion per year.
    </li>
  </ul>
</details>

<p>Want to calculate the costs of car infrastructure or bike/transit infrastructure in your community?  <a href="https://www.sambutler.us/community-savings?service=cars&infrastructure=bike%20and%20transit%20transition&cost_per_user=2000&capital=4000000&users=Homes&users_per_month=1000&use_cost=12000&percent_savings_shared=50&payback_years=5&per_time_unit=1&percent_savings=75&community=our%20community&dollar_savings_kept=8038">Try the calculator.</a></p>
</div>

<ShareButton></ShareButton>
</article>
