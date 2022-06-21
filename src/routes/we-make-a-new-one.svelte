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

<h3><em>We gonna make a new one</em></h3>
<div class="contains-music"><p>Dancehall x Major Lazer type beat, with bass and a lower pitch.  An emphatic, deep voice singer.  Could have a similar pitch to this:</p>
<div data-video="_Zr8aV_d1YA" data-autoplay="0" data-loop="0" data-start="130" class="youtube-audio"></div>    (<a href="https://youtu.be/_Zr8aV_d1YA?t=130"><em>Compost</em></a>)
Could also have multiple people coming in on different verses, like:
<div data-video="6hGza1pWZ_E" data-autoplay="0" data-loop="0" class="youtube-audio"></div>(<a href="https://www.youtube.com/watch?v=6hGza1pWZ_E"><em>Watch Out For This — Bumaye</em>)</a>
</div>

Similar voices and sounds: https://youtu.be/T1_iDT9KeYc?t=36, https://youtu.be/RZ_AhYNyUh0?t=23, https://youtu.be/6hGza1pWZ_E?t=83

<div data-video="_Zr8aV_d1YA" data-autoplay="0" data-loop="0" data-start="130" class="youtube-audio"></div>
<div data-video="KK2smasHg6w" data-autoplay="0" data-loop="0" class="youtube-audio"></div>

<p>Concept sound:</p>
<audio controls>
    <source src="./wemakeanewone_61422_1.mp3">
</audio>

<div style="font-style: italic">
The spot is getting hotter
Our job is to survive  
Biodiverse things  
Let us all thrive
Community is life
Water keeps us alive
We protect our waters
It gives all life

Belonging to the world
Connected and alive
Fungus in a forest
Trees and fireflies
We make the world
Dead or alive
Now our world is dead
Lets bring it back to life

We change the world
From behind our eyes
Now it is changed
Open up your eyes
We make the world
Dead or alive
Now the world is dead
Now we make it alive

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
Playful rela-tions
Change perspectives
Open ears and eyes
Our world is always changing
Open paradigms

Change behind your eyes
Go and vote your mind
Talk it out with neighbors
Make it in our lives
Meeting of the minds
Meeting of the people
The old world is dead
We make new worlds real

Out into the streets
Where it all gets real
Raising up the heat
And it all gets real
Jail is where we meet
Till the jailers know we real
The old world is beat
We make new worlds real

Get out of your cars
Dance in the street
All the stores are gone
Grow food so we eat
Solar in the park
So we still have heat
Gather after dark
Heart drum life beat_
Out to the street
It’s where we all meet

Out to the street
It’s where we all meet
Out to the street
It’s where we all meet
Out to the street
It’s where we all meet
</div>

<style>
    .youtube-audio {
        display: inline-flex;
        height: 25px;
    }

    .contains-music p {
        display: inline;
    }
</style>