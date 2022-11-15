<script>

let posts = [
    {
        author: "Amy Artist",
        html: `<h4 style="display: inline;">this is a <span style="color: purple; display: inline;">crazy</span></h4> <p style="font-size: 15px; display: inline;">message</p> <p style="font-size: 14px; display: inline;">on</p> <p  style="font-size: 12px; display: inline;">the</p> <p  style="font-size: 10px; display: inline; color: sienna;"><strong>web!</strong></p></div>`,
        time: "2 minutes ago"
    },
    {
        author: "Tim's Twitter Feed",
        html: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Design twitter from scratch using sqlite, pubsub, go and htmx.<br><br>What are the questions to be asked in order to arrive at a workable design?</p>&mdash; workdad (@workdaddev) <a href="https://twitter.com/workdaddev/status/1588713700411977729?ref_src=twsrc%5Etfw">November 5, 2022</a></blockquote>`,
        time: "5 minutes ago"
    },
    {
        author: "Wow Interactive",
        html: `<iframe
  width="100%"
  height="400px"
  src='https://www.inkandswitch.com/potluck/demo/?openDocument=bar'
  title="Streets"
  style="border:none;"
></iframe>`,
        time: "6 minutes ago"
    },
    // {
    //     author: "Fran's Facebook Feed",
    //     html: `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsam.smith.311%2Fposts%2Fpfbid02aJyXVyJD9R2m821JgXumRHTApRjWLENfvVtxRnA8G3c8gKiB7o7sifAo9gqcahmql&show_text=true&width=500" width="500" height="250" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
    //     time: "8 minutes ago"
    // },
    // {
    //     author: "Iggy's IG Feed",
    //     html: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Design twitter from scratch using sqlite, pubsub, go and htmx.<br><br>What are the questions to be asked in order to arrive at a workable design?</p>&mdash; workdad (@workdaddev) <a href="https://twitter.com/workdaddev/status/1588713700411977729?ref_src=twsrc%5Etfw">November 5, 2022</a></blockquote>`,
    //     time: "9 minutes ago"
    // },
    {
        author: "Carly Carmichaels",
        html: `<iframe
  width="100%"
  height="400px"
  src='https://spect.netlify.app/'
  title="Streets"
  style="border:none;"
></iframe>`,
        time: "10 minutes ago"
    },
];

</script>
<svelte:head>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

    </svelte:head>

<article class="h-entry">
    <h1 class="p-name"><a class="u-url" href="/html-as-post">HTML as Post</a></h1>
    <p style="font-style: italic">Sam Butler (November 15th, 2022)</p>
    <div class="e-content">   
<p>Imagine a network for social interacation and sharing, where the messages are snippets of HTML.

    {#each posts as post}
    <div style="width: 100%; border: solid 1px gray; padding: 1em; margin-top: 0.5em;">
        <p style="font-size: 14px; color: grey;">{post.author}</p>    <p style="font-size: 12px; color: lightgrey;">{post.time}</p>  
    {@html post.html}
    </div>
    {/each}

    <p>You could share hypermedia, blogs, applets, websites, REPLs.  You could share anything.
        
        <p>(This should align with <a href="https://htmldriven.dev">HTML-Driven Development</a> and <a href="https://docs.google.com/document/d/1sT7BeJ1CId7txsfPgy_nlmYgFywSr7Hm5FfnZiLZq4M/edit?usp=sharing">"Tools for Conviviality"</a>, which specify <strong>environmental friendliness</strong> and <strong>low energy consumption</strong>.  If this would increase energy consumption, we should reflect.  Perhaps by sharing snippets of HTML rather than entire websites/apps, the web could be slimmed/scaled down — this should be investigated carefully.)

        <p>People wouldn't need to "clickthrough."  What someone wishes to share would be right there in front of you.

            <p>This could even enable <a href="https://www.eff.org/deeplinks/2019/10/adversarial-interoperability">adversarial interoperability / "com com" (Doctorow)</a>.  You could see Tweets, Facebook posts, Instagram posts, LinkedIn posts, Reddit posts, TikTok videos, YouTube videos — all in the same interface!

                <p>HTMX seems well-suited for this.  Anybody interested in collaborating / exploring it?

</div>
</article>