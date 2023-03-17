<script>
let copy_tooltip = false;

function shareProgram() {

let url = `${window.location.origin}${window.location.pathname}`

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

<button type="button" class="share" on:click={shareProgram}><em>Share this page!</em></button>
{#if copy_tooltip}
<span style="width: fit-content; font-size: 14px; display: block; margin: auto; margin-top: 10px; font-style: italic;">You copied the link!</span>
{/if}

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