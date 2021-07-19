<script>
    let subscribe_open = false;

    function subscribeToggle() {

        if (subscribe_open == false) {
            subscribe_open = true; 
            document.getElementById('subscribe_form').style.display = 'flex'; 
        }
        else {
            subscribe_open = false; 
            document.getElementById('subscribe_form').style.display = 'none'; 
        }
    //    (subscribe_open == false) ? (function() { subscribe_open = true; document.getElementById('subscribe_form').style.display = 'block'; console.log(document.getElementById('subscribe_form')); } ) : (function() {subscribe_open = false; document.getElementById('subscribe_form').style.display = 'none';} );
    }
</script>

<div style="display: flex">
<h3 style="margin:0px; margin-right: 15px;"><a class="h-card" href="https://sambutler.us/">Sam Butler</a></h3>
<h4 style="margin:0px; margin-right: 15px;"><a href="/ideas">Ideas</a></h4>
<h4 style="margin:0px;"><a href="/">About</a></h4>
<div style="margin-left: auto;">
<div id="subscribe_form" style="display: none; position: relative;">
{#if subscribe_open == true}
<span class="text-gray-500 text-sm" style="position: absolute; top: -25px; left: 50%; transform:translate(-50%); width: max-content; font-size: 14px; color: gray;">Stay up-to-date on future content
    <svg xmlns="http://www.w3.org/2000/svg" style="vertical-align: bottom;" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <polyline points="3 7 12 13 21 7" />
  </svg></span>
{/if}
<script async data-uid="2f4cd57383" src="https://successful-founder-8657.ck.page/2f4cd57383/index.js"></script>
{#if subscribe_open == true}
<svg on:click={subscribeToggle} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#444" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
{/if}
</div>
{#if subscribe_open == false}
  <h4 on:click={subscribeToggle} style="margin:0px;">
    <svg style="vertical-align: text-top" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#191fd0" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <line x1="10" y1="14" x2="21" y2="3" />
    <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
  </svg> Subscribe</h4>
  <!-- <h4 on:click={subscribeToggle} style="margin:0px;">
    <svg style="vertical-align: text-top" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#191fd0" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg> Subscribe</h4> -->
{/if}
</div>
</div>
<hr style="opacity: 50%;">

<style>
    h4:hover {
        color: #D0191F;
        cursor: pointer;
    }

    .subscribe_form > form > div {
        padding: 0px;
    }

    .formkit-alert .formkit-alert-success {
    font-size: 12px !important;
    margin: 0px !important;
    padding: 5px !important;
    }
</style>