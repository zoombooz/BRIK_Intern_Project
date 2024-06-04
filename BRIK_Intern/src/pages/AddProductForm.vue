<script>

</script>

<template>
    <div class="h-min-full w-4/5 h-screen mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg text-center">
        <h1 class="text-2xl font-extrabold sm:text-3xl">Add a product</h1>
      </div>
    
      <form action="#" class="mx-auto mb-0 mt-8 max-w-5xl space-y-4">
        <div class="flex">
          <div class="mr-4 w-1/2">
            <label for="name" class="sr-only">Product name</label>
      
            <div class="relative">
              <input
                id="name"
                type="text"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Product name"
              />
            </div>
          </div>
      
          <div class="w-1/2">
            <label for="category" class="sr-only">Category</label>
      
            <div class="relative">
              <input
                id="category"
                type="text"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Category"
              />
            </div>
          </div>
        </div>
        <div>
          <label for="description" class="sr-only">Description</label>
    
          <div class="relative">
            <textarea 
              name="description" 
              id="description" 
              placeholder="Description" 
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            ></textarea>
          </div>
        </div>
        <div>
          <label for="category" class="sr-only">Category</label>
    
          <div class="relative">
            <input
              id="category"
              type="text"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Category"
            />
          </div>
        </div>
        <div class="flex ">
          <div class="mr-4 w-1/4">
            <label for="weight" class="sr-only">Weight</label>
      
            <div class="relative">
              <input
                id="weight"
                type="number"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Weight"
              />
            </div>
          </div>
          <div class="mr-4 w-1/4">
            <label for="width" class="sr-only">Width</label>
      
            <div class="relative">
              <input
                id="width"
                type="number"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Width"
              />
            </div>
          </div>
          <div class="mr-4 w-1/4">
            <label for="length" class="sr-only">Length</label>
      
            <div class="relative">
              <input
                id="length"
                type="number"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Length"
              />
            </div>
          </div>  
          <div class="w-1/4">
            <label for="height" class="sr-only">Height</label>
      
            <div class="relative">
              <input
                id="height"
                type="number"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Height"
              />
            </div>
          </div>
        </div>
        <div>
          <label for="image" class="sr-only">Image URL</label>
    
          <div class="relative">
            <input
              id="image"
              type="text"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Image URL"
            />
          </div>
        </div>
        <div>
          <label for="harga" class="sr-only">Price</label>
    
          <div class="relative">
            <input
              id="harga"
              type="number"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Price"
            />
          </div>
        </div>

    
        <div class="flex items-center justify-center">
          <button
            type="submit"
            class="inline-block rounded-lg w-full bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  </template>