<script lang="ts">
    export let is404
</script>

{#if is404}
    <div>
        <h1>404 Page Not Found</h1>
        This page could not be found.
    </div>
{:else}
    <div>
        <h1>500 Internal Server Error</h1>
        Something went wrong.
    </div>
{/if}