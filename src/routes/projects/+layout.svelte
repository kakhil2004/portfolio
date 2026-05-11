<script>
  let { children } = $props();
</script>

<div class="prose">
  {@render children()}
</div>

<style>
  .prose {
    max-width: 720px;
    margin: 0 auto;
  }
</style>
