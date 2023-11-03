<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data;
  let wow = data.props;
  console.log(wow);
  let emptyUserState = {
    isLoggedIn: false,
    user: {},
  };
</script>

<main>
  {#if !wow.data.isLoggedIn}
    <div
      class="flex flex-col justify-center items-center mx-auto max-w-screen-xl p-4 py-40"
    >
      <h1 class="text-black font-extrabold text-5xl">
        You are not allowed here!
      </h1>
    </div>
  {:else}
    <div
      class="flex flex-col justify-center items-center mx-auto max-w-screen-xl p-4 py-40"
    >
      <h1 class="text-black font-extrabold text-5xl mb-3">
        Welcome, <u>{wow.data.user.name}!</u>
      </h1>
      <p>{wow.data.user.email}</p>
      {#if wow.data.user.is_superuser == true}
        <p>Admin</p>
        <button
          on:click={() => (location.href = "/adminPage/")}
          class=" flex justify-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Admin Page
        </button>
      {:else}
        <p>Not Admin</p>
      {/if}
      <slot />
    </div>
  {/if}
</main>
