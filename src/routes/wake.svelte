<script>
    import PlainSubscribe from "/src/lib/PlainSubscribe.svelte";
    import ShareButton from "/src/lib/ShareButton.svelte";
    import TopMatter from "/src/lib/TopMatter.svelte";  
    
    let title = "Wake";
    let description = "Up and down walkways, In and out of houses, individualized lives ... even the fire ..... is forgotten."
    let og_image = "/wake.jpg"
    let local_url = "wake"
    let domain = "https://sambutler.us"
    let full_url = {domain} + "/" + {local_url};
  </script>

    <style>
    img, video {
        max-width: 100%;
    }

    h4 > span {
      font-weight: normal;
    }

    /* h4 {
      display: inline;
    } */

    h4 + p {
      display: inline;
    }

    .large {
        font-size: 64px;
        font-weight: 800;
        margin-top: 30px;
        margin-bottom: 30px;
      }

    /* previous:has(+ p){
      display: inline;
    } */

  </style>
  
  <TopMatter title={title} description={description} og_image={og_image} full_url={full_url} local_url={local_url} domain={domain}></TopMatter>
  <head>
    </head>
  <article class="h-entry">
    <h1 class="p-name"><a class="u-url" href={local_url}>{title}</a></h1>
    <!-- <p style="font-style: italic">Sam Butler (February 2ndth, 2022 at 11:45am CEST)</p> -->
    <div class="e-content">
<!-- 
      <span class="text-gray-500 text-sm" style="width: max-content; font-size: 14px; color: gray; text-align: center; display: block; margin: auto;">Subscribe for more content like this
        <svg xmlns="http://www.w3.org/2000/svg" style="vertical-align: bottom;" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h44v24H0z" fill="none"/>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg></span>
          <PlainSubscribe></PlainSubscribe> -->

          <p>Up and down walkways<br />
            In and out of houses<br />
            individualized lives<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; even the fire<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; is forgotten</p>
            
            <p style="text-align: right;">On FIRE,<br />
            smoldering alone,<br />
            the God of Light,<br />
            forgotten.</p>
            
            <p>To the glowing blue of television.<br />
            Humming.&nbsp; Attracting us like flies.<br />
            Extreme and depraved reality television, like a sedative.<br />
            Orwellian nightly news broadcasts on the not-holocausts unfolding around us.<br />
            &ldquo;It&rsquo;s another warm day tomorrow, breaking records &hellip;&rdquo;</p>
            <p class="large">
            THERE IS NOTHING THAT&rsquo;S GOING TO WAKE US UP FROM THIS.</p>
            
            <p class="large">NOT STORMS. NOT HOLOCAUST.&nbsp; NOT APOCALYPSES OR FIRES IN THE SKY.</p>
            
            <p class="large">WE WILL TURN, HALF-SEDATED AS COGS, INTO AN EVER GRIMMER AND MORE DESPERATE REALITY.</p>
            
            <p class="large" style="text-align: right;">UNLESS&hellip;</p>
            
            <p>&nbsp;&nbsp; &nbsp; &nbsp;     The TV turns off.</p>
            
            <p>Sitting.&nbsp; Breathing.&nbsp; Shoulders up &hellip; and down.&nbsp; Breathing.</p>
            
            <p>Reaching for a phone - then putting it back, face down.&nbsp; At rest.&nbsp; Bored.</p>
            
            <p> &nbsp;&nbsp; &nbsp; &nbsp;    In the park.&nbsp; In the morning.&nbsp; Looking at the strange way the cars drive down the road.&nbsp; Little pods of metal, made and only possible with the extraction and unfairness throughout the world.</p>
            
            <p> &nbsp;&nbsp; &nbsp; &nbsp;    A bird shivers its wings and twitches its head.&nbsp; Calling.&nbsp; Singing.&nbsp; In the morning quiet.</p>
            
            <p>A blur &mdash; a tumble and screech, down to the ground.</p>
            
            <p>An orange tabbycat with a pink collar and little silver bell lies on its side on the ground, with a lifeless bird in its teeth.&nbsp; It shakes its head, pawing and playing at the bird in its mouth.</p>
            
            <p>It throws the bird to the side, and with a jingle, jumps and takes off running.</p>
            
            <p>Close on the dead bird.</p>
            
            <p> &nbsp;&nbsp; &nbsp; &nbsp;    A bee on a flower.</p>
            
            <p>The bee feels and drinks the pollen in the granular tubes and vases and bulbs of the flower.&nbsp; Feeling.&nbsp; Living.&nbsp; In relation.</p>
            
            <p>The bee lifts up &mdash;&nbsp;and flies off the flower.&nbsp; It navigates through the air, beelining up, a marvelous act of nature and evolution and history, rising past tree branches, avoiding spider webs and birds nests, rising up the great tree trunk to a HIVE nestled between a large branch and the trunk, crawling with life in and out, humming and vibrating with energy, as the bee flies inside the colony.</p>
            
            <p>Timelapse of a few weeks, as the buds on the tree stems start to open &hellip; and fewer bees fly in and out of the colony.</p>
            
            <p>As the tree flowers bloom, the hive is now still.&nbsp; Lifeless.&nbsp; Barren.</p>
            
            <p>And the flower buds on the trees stick out, offering their pollen to the stale air, giving their energy, giving out &hellip; and unrequited.</p>
            
            <p style="text-align: right">Alone.</p>
            
            <p> &nbsp;&nbsp; &nbsp; &nbsp;    An empty parking lot.</p>
            
            <p>An empty parking garage.<br />
            Empty streets of asphalts.</p>
            
            <p>Driveways with cars snuggly parked inside them, like people &mdash;&nbsp;they get the best room in the house.</p>
            
            <p> &nbsp;&nbsp; &nbsp; &nbsp;    A hot stuffy school bus.</p>
            
            <p>Kids are coughing.&nbsp; The driver is hacking.&nbsp; A kid with a respirator is getting bullied in the back of the bus, by two other children who haven&rsquo;t been taught anything otherwise.</p>
            
            <p> &nbsp;&nbsp; &nbsp; &nbsp;    People at the grocery store, hacking, coughing.</p>
            
            <p>Throwing boxes of frozen calamari and tuna and red ground beef into their carts.</p>
            
            <p> &nbsp;&nbsp; &nbsp; &nbsp;    FLASH TO</p>
            
            <p>A tortuous machine flash freezing and grinding an octopus alive, in an octopus factory farm.</p>
            
            <p>A flash of photograph, old black-and-white, showing a fisherman holding a prize catch of tuna &mdash;&nbsp;the fish is almost as large as the man, an indeed wider.&nbsp; Just 50 years ago.</p>
            
            <p>&hellip; To the masses of miniscule tuna in the trawler nests, towing behind trawler ships in nets.</p>
            
            <p>The cows in factory farm pens, slave existences strapped up to the milk collectors, in steel fences to narrow to do anything more than go down on all fours and stand back up.</p>
            
            <p> &nbsp;&nbsp; &nbsp; &nbsp;    A government meeting, between a president and an adviser.</p>
            
            <p>&ldquo;What will this due to our life expectancy?&rdquo;</p>
            
            <p>&ldquo;We&rsquo;re in &hellip; unprecedented territory,&rdquo; the adviser shares.</p>
            
            <p>&ldquo;But we can&rsquo;t let too many die?&nbsp; Can we take that &hellip; economoically?&rdquo;</p>
            
            <p>&ldquo;... The goal,&rdquo; the adviser speaks gravely, &rdquo;is to keep them productive as long as we can &hellip; and then not let them be a liability.&nbsp; It&rsquo;s a national securit matter, for our solvency.&rdquo;</p>
            
            <p>A BOMB EXPLODES, ear-bursting sound dampened by concrete, the shockwaves shaking us.</p>
            
            <p> &nbsp;&nbsp; &nbsp; &nbsp;    On a building of rubble in Palestine.</p>
            
            <p>A child screams, unseen, under the rocks.&nbsp; Their voice is muffled by tons of stone on top of them, pressing down on their chest.</p>
            
            <p>Still, they scream.</p>
            
            <p>And no one is there.</p>
            
            <p>&nbsp;&nbsp; &nbsp; &nbsp;     A woman in her early 30s sits on a cold mattress in a fluorescent room, talking with a doctor in a white coat, standing opposite and with her.</p>
            
            <p>&ldquo;I do everything.&nbsp; Sunscreen, food, supplements, rest, diet, exercise.&nbsp; I do everything.&nbsp; How do I &mdash;&rdquo;</p>
            
            <p>&ldquo;I&rsquo;m sorry,&rdquo; the doctor comparts, familiar with this not-yet-familiar conversation.</p>
            
            <p>&ldquo;How is this happening?&nbsp; What can I being doing differently?&rdquo;</p>
            
            <p>&ldquo;Cases are skyrocketing.&nbsp; Microplastics are everywhere, mostly from car tires.&nbsp; Its in our blood. &hellip; And COVID &hellip;.&rdquo;</p>
            
            <p>&nbsp;&nbsp; &nbsp; &nbsp; On FIRE</p>
            
            <p>Alone in the yard in the suburbs, as cars drive by, and people cough going up the walkways into their houses, the air silent and stale and still like standing water.</p>
            
            <p>A voice whispers on the wind.</p>
            
            <p><em>It starts with connecting.&nbsp; Siding with the land &hellip;</em></p>
            
            <p>&nbsp;</p>
            

                                <span class="text-gray-500 text-sm" style="width: max-content; font-size: 14px; color: gray; text-align: center; display: block; margin: auto;">Subscribe for updates
                <svg xmlns="http://www.w3.org/2000/svg" style="vertical-align: bottom;" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h44v24H0z" fill="none"/>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg></span>
                  <PlainSubscribe></PlainSubscribe>

<br>

<ShareButton></ShareButton>

    </article>
