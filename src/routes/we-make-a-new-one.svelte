<script>
import { onMount } from "svelte";



    onMount(() => {
        onYouTubeIframeAPIReady();
    })

    function onYouTubeIframeAPIReady()
{

    var o= function(e, t) 
    // This function switches the imgs, you may want to change it
    {
        var a=e?"IDzX9gL.png":"quyUPXN.png"; 
        //IDzX9gL is the stopped img and quyUPXN the playing img

        t.setAttribute("src","https://i.imgur.com/"+a)
        // folder or web direction the img is in. it can be "./"+a
    };

    var counter = 0;
    var bigE = document.querySelectorAll(".youtube-audio");

    bigE.forEach(function(e)
    {
        var t=document.createElement("img");

        t.setAttribute("id","youtube-icon-"+counter),
        t.style.cssText="cursor:pointer;cursor:hand",
        e.appendChild(t);

        var a=document.createElement("span");

        a.setAttribute("id","youtube-player-"+counter),
        e.appendChild(a);

        t.setAttribute("src","https://i.imgur.com/quyUPXN.png");

        e.onclick=function()
        {
            r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),
            o(!1, t)):(r.playVideo(),
            o(!0, t))
        };

        var r= new YT.Player("youtube-player-"+counter,
        {

            height:"0",
            width:"0",
            videoId:e.dataset.video,
            playerVars:
            {
                autoplay:e.dataset.autoplay,loop:e.dataset.loop,
                start: e.dataset.start
            },
            events:
            {
                onReady:function(e)
                {
                    r.setPlaybackQuality("small"),
                    o(r.getPlayerState()!==YT.PlayerState.CUED, t)
                },
                onStateChange:function(e)
                {
                    e.data===YT.PlayerState.ENDED&&o(!1, t)
                }
            }
        })

        counter++;
    });
}
</script>

<div style="display: none">Sam Butler, 6/14/22</div>



<svelte:head>
<script src="https://www.youtube.com/iframe_api"></script>
<!-- <script src="https://cdn.rawgit.com/labnol/files/master/yt.js"></script> -->
</svelte:head>

<!-- <h3><em>We gonna make a new one</em></h3> -->
<div class="contains-music"><p>Major Lazer type beat, with bass and a lower pitch.  An emphatic, deep voice singer.  Voice/sound references:</p>
<div data-video="_Zr8aV_d1YA" data-autoplay="0" data-loop="0" data-start="130" class="youtube-audio"></div>    (<a href="https://youtu.be/_Zr8aV_d1YA?t=130"><em>Compost ft DiorNoel - Nate & Hila</em></a>), <div data-video="6hGza1pWZ_E" data-autoplay="0" data-loop="0" data-start="15" class="youtube-audio"></div>(<a href="https://www.youtube.com/watch?v=6hGza1pWZ_E?t=15"><em>Watch Out For This — Major Lazer</em>)</a>,
<div data-video="T1_iDT9KeYc" data-autoplay="0" data-loop="0" data-start="37" class="youtube-audio"></div>(<a href="https://www.youtube.com/watch?v=T1_iDT9KeYc?t=37"><em>Blam Blam ft Chesire Cat - Kingston Express</em>)</a>
</div>
<p>Lyrics</p>
<div style="font-style: italic">
The spot is getting hotter <br>
Our job is to survive <br>    
Biodiverse things <br>    
Let us all thrive <br>
Community is life <br>
Water keeps us alive <br>
We protect our waters <br>
It gives all life <br>
<br>
Belonging to the world <br>
Connected and alive <br>
Fungus in a forest <br>
Trees and fireflies <br>
We make the world <br>
Dead or alive <br>
Now our worlds are dead <br>
Lets bring them back to life <br>
<br>
We change the world <br>
From behind our eyes <br>
Now it is changed <br>
Open up your eyes <br>
We make the world <br>
Dead or alive <br>
Now our worlds are dead <br>
Now we make them alive <br>
<br>
End the car traffic <br>
Let the streets come alive <br>
Children in the market <br>
Finding places to hide <br>
This is a world <br>
We dream of inside <br>
Play and love and dance <br>
Grow food and survive <br>
<br>
Flesh and politics <br>
Limits, big tits <br>
Deciding how we live <br>
In relation <br>
Change perspective <br>
Open ears and eyes <br>
Our world is always changing <br>
Open paradigms <br>
<!-- <br>
Change behind your eyes <br>
Go and vote your mind <br>
Talk it out with neighbors <br>
Make it in our lives <br>
Meeting of the minds <br>
Meeting of the people <br>
The old world is dead <br>
We make new worlds real <br>
<br>
Out into the streets <br>
Where it all gets real <br>
Raising up the heat <br>
And it all gets real <br>
Jail is where we meet <br>
Till the jailers know we real <br>
The old world is beat <br>
We make new worlds real <br> -->
<br>
Get out of your cars <br>
Dance in the street <br>
All the stores are gone <br>
Grow food so we eat <br>
Gather in the park <br>
So we still have heat <br>
Gather after dark <br>
Heart drum life beat_ <br>
Out to the street <br>
It’s where we all meet <br>
<br>
Out to the street <br>
It’s where we all meet <br>
Out to the street <br>
It’s where we all meet <br>
Out to the street <br>
It’s where we all meet <br>
</div>
<p>Here's a concept sound:</p>
<audio controls>
    <source src="./wemakeanewone_61422_1.mp3">
</audio>

<p>You can comment/leave any feedback <a href="https://docs.google.com/document/d/1u9XyVwsKjTPRFn6YCmKw9dDLHlhucK_kSeFs1MZUZoU/edit?usp=sharing">on this Google Doc</a>.</p>

<!-- 

The spot is getting hotter
Our job is to survive
Biodiverse things
Let us all thrive
Community is life
Water keeps us alive
We protect our waters
They give all life

Belonging to our worlds
Connected and alive
Fungi in a forest
Trees and fireflies
We make our worlds
Dead or alive
Now our worlds are dead
Let them come alive

Get out of your cars
Dance in the street
All the stores are gone
Grow food so we eat
Panels in the park
So we still have heat
Gather after dark
Heart drum life beat_

Get out of your cars
Dance in the street
All the stores are gone
Grow food so we eat
Panels in the park
So we still have heat
Gather after dark
Heart drum life beat_
Gather after dark
Heart drum life beat_

End the car traffic
Let the streets come alive
Children in the market
Finding places to hide
This is a world
We dream of inside
Play and love and dance
Make food and survive

Flesh and politics
Limits, big tits
Deciding how we live
In relation
Change perspective
Open ears and eyes
Our world is always changing
Open paradigms

We change our worlds
From behind our eyes
Now they are changed
Open up your eyes
We make our worlds
Dead or alive
Now our worlds are dead
Let them come back alive

Get out of your cars
Dance in the street
All the stores are gone
Grow food so we eat
Panels in the park
So we still have heat
Gather after dark
Heart drum life beat_

Get out of your cars
Dance in the street
All the stores are gone
Grow food so we eat
Panels in the park
So we still have heat
Gather after dark
Heart drum life beat_
Gather after dark
Heart drum life beat_


Major Lazer type beat, with a deep pitch and bass (reggae/dub like) and some trumpets that get upbeat

Sound references:
https://youtu.be/RZ_AhYNyUh0?t=23
https://youtu.be/6hGza1pWZ_E?t=49


Lyrics:

The spot is getting hotter
Our job is to survive
Biodiverse things
Let us all thrive
Community is life
Water keeps us alive
We protect our waters
They give all life

Belonging to our world
Connected and alive
Fungi in a forest
Trees and fireflies
We make our worlds
Dead or alive
Now our worlds are dead
We bring them back to life

Bridge:

Get out of your cars
Dance in the street
All the stores are gone
Grow food so we eat
Power in the park
So we still have heat
Gather after dark
Heart drum life beat_

(rising)

Get out of your cars
Dance in the street
All the stores are gone
Grow food so we eat
Power in the park
So we still have heat
Gather after dark
Heart drum life beat_

Chorus – upbeat and loud with trumpets

End the car traffic
Let the streets come alive
Children in the market
Finding places to hide
This is a world
We dream of inside
Play and love and dance
Make food and survive

End the car traffic
Let the streets come alive
Children in the market
Finding places to hide
This is a world
We dream of inside
Play and love and dance
Make food and survive

Verse:

Flesh an politics
Limits, big tits
Deciding how we live
In relation
Change perspective
Open ears and eyes
Our world is always changing
Open paradigms

We change our worlds
From behind our eyes
Now they are changed
Open up your eyes
We make our worlds
Dead or alive
Now our worlds are dead
We bring them back to life

Bridge:

Get out of your cars
Dance in the street
All the stores are gone
Grow food so we eat
Power in the park
So we still have heat
Gather after dark
Heart drum life beat_

(rising)

Get out of your cars
Dance in the street
All the stores are gone
Grow food so we eat
Power in the park
So we still have heat
Gather after dark
Heart drum life beat_

Chorus:

End the car traffic
Let the streets come alive
Children in the market
Finding places to hide
This is a world
We dream of inside
Play and love and dance
Make food and survive

End the car traffic
Let the streets come alive
Children in the market
Finding places to hide
This is a world
We dream of inside
Play and love and dance
Make food and survive

Outro:

Get out of your cars
Dance in the street

All the stores are gone
Grow food so we eat

Power in the park
So we still have heat

Gather after dark
Heart drum life beat_

Get out of your cars
Dance in the street

All the stores are gone
Grow food so we eat

Power in the park
So we still have heat

Gather after dark
Heart drum life beat_

Get out of your cars
Dance in the street

All the stores are gone
Grow food so we eat

Power in the park
So we still have heat

Gather after dark
Heart drum life beat_

Get out of your cars
Dance in the street

All the stores are gone
Grow food so we eat

Power in the park
So we still have heat

Gather after dark
Heart drum life_




Research:

https://www.beatstars.com/beat/major-lazer-x-sia-type-beat-heroes-11584483

https://www.beatstars.com/beat/hot-water-type-beats-sean-paul-1417116

https://www.beatstars.com/beat/major-lazer-type-beat-pop-instrumental-2021-8893862


https://www.beatstars.com/beat/isla-9386205

https://www.beatstars.com/beat/trumpets-5601427

https://www.beatstars.com/beat/guaye-12238639

https://www.beatstars.com/beat/triste-12390783

https://www.beatstars.com/beat/luna-7319254
 -->

<style>
    .youtube-audio {
        display: inline-flex;
        height: 25px;
    }

    .contains-music p {
        display: inline;
    }
</style>