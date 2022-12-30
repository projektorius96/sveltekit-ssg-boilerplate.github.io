<script>
// DEV_NOTE: [source](https://github.com/sveltejs/kit/tree/master/packages/adapter-static)

// src/routes/+layout.js

// This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = true;
</script>

<h1>Header</h1>

    <slot />

<h3>Footer</h3>