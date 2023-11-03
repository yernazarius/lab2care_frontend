<script>
  /** @type {import('./$types').PageData} */
  export let data;
  let wow = data.props;
  let categoty_data = data.props.categoty_res;
  console.log(categoty_data);
</script>

<section class="bg-white">
  <div class="container px-6 py-8 mx-auto">
    <div class="lg:flex lg:-mx-2">
      <div class="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
        {#each categoty_data as item}
          <a
            href="/"
            class="block font-semibold text-gray-700 capitalize hover:underline"
          >
            <span class="ml-2">
              {item.name}
            </span>
            <div class="flex">
              <svg
                fill="none"
                height="26"
                viewBox="0 0 24 24"
                width="26"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  d="m15 20c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l2.3-2.3h-8.6c-1.3 0-2.6-.5-3.5-1.5-1-.9-1.5-2.2-1.5-3.5s.5-2.6 1.5-3.5c.9-1 2.2-1.5 3.5-1.5h1c.6 0 1 .4 1 1s-.4 1-1 1h-1c-.8 0-1.6.3-2.1.9-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.1c.5.6 1.3.9 2.1.9h8.6l-2.3-2.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l4 4c.1.1.2.2.2.3s.1.2.1.4c0 .1 0 .3-.1.4 0 .1-.1.2-.2.3l-4 4c-.2.2-.4.3-.7.3z"
                  fill="rgb(0,0,0)"
                /></svg
              >
              <p class="mb-2 mt-1 text-sm font-medium text-gray-500">
                {item.description}
              </p>
            </div>
          </a>
        {/each}
      </div>

      <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5">
        <div
          class="flex items-center justify-between text-sm tracking-widest uppercase"
        >
          <p class="text-gray-500">Items</p>
          <div class="flex items-center">
            <p class="text-gray-500">Sort</p>
            <select
              class="font-medium text-gray-700 bg-transparent focus:outline-none"
            >
              <option value="#">Recommended</option>
              <option value="#">Size</option>
              <option value="#">Price</option>
            </select>
          </div>
        </div>

        <div
          class="grid grid-flow-row gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {#each wow.data as item}
            <div
              class="flex flex-col items-center justify-center w-full max-w-lg mx-auto"
            >
              <a href="/categories/{item.id}">
                <img
                  class="object-cover w-full rounded-md h-72 xl:h-80"
                  src={item.image}
                  alt={item.name}
                />
                <h4 class="mt-2 text-lg font-medium text-gray-700">
                  {item.name}
                </h4>
                <p class="text-blue-500">{item.price}</p>
                <p class="text-blue-500">{item.description}</p>
              </a>

              <button
                class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 mx-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                  />
                </svg>
                <span class="mx-1">Add to cart</span>
              </button>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
