<script lang="ts">
  import { enhance } from "$app/forms";
  /** @type {import('./$types').PageData} */
  export let data;
  let wow = data.props;
  // console.log("admin page:", wow);
</script>

{#if wow.data.isLoggedIn && wow.data.user.is_superuser}
  <a type="button" href="adminPage/addProduct">Add product</a>
  <a type="button" href="adminPage/addBlog">Add Blog</a>
{:else}
  <h1>You are not allowed here!</h1>
{/if}
