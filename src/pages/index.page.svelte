<script lang="ts">
  import ssrLogo from '../assets/vite-plugin-ssr.svg';
  import svelteLogo from '../assets/svelte.svg'
  import Counter from '../lib/Counter.svelte'
  import Layout from './__layout.svelte'
</script>

<Layout>
  <div>
    <a href="https://vitejs.dev">
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://vite-plugin-ssr.com">
      <img src={ssrLogo} class="logo ssr" alt="Vite Plugin SSR Logo" />
    </a>
    <a href="https://svelte.dev">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1 class="center-text">Vite + SSR + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite, vite-plugin-ssr, and Svelte logos to learn more
  </p>
</Layout>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.ssr:hover {
    filter: drop-shadow(0 0 2em #4400d6aa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>