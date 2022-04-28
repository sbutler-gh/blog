<script>
        import { createEventDispatcher } from 'svelte';

        const dispatch = createEventDispatcher();

</script>
<div class="welcome_modal">
<!-- <h3>Welcome!</h3> -->
<p>You can find the program that was shared with you below, and watch the video to learn more!</p>
<button on:click={function() {dispatch('closeintromodal', {})}} style="margin: auto; text-align: center; display: block; font-size: 18px;  border-radius: 5px; cursor: pointer; background: #cbffcb; border: solid 1px limegreen; color: green;">Got it!</button>
<!-- <span style="position: absolute; top: 4px; right: 4px; cursor: pointer; color: green; fill: green;" on:click={function() {dispatch('closeintromodal', {})}}>
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
  </span> -->
</div>