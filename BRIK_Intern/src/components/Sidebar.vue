<template>
    <div class="relative flex h-screen flex-col justify-between border-e bg-white">
        <div class="px-4 py-6">
            <h1 class="font-extrabold text-3xl text-gray-600">BRIK Kelontong</h1>
        
            <ul class="mt-6 space-y-1">
            <li>
                <router-link
                to="/"
                class="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                All Products
                </router-link>
            </li>
        
            <li>
                <router-link
                to="/add-product"
                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                Add Products
                </router-link>
            </li>
        
            <li>
                <router-link
                to="/login"
                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                Login
                </router-link>
            </li>
            </ul>
        </div>
        
        <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
            <a href="#" class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
            <img
                alt="Random Image"
                src="https://picsum.photos/200"
                class="size-10 rounded-full object-cover"
            />
        
            <div>
                <p class="text-xs">
                <strong class="block font-medium">John Doe</strong>
        
                <span> john.doe@email.com </span>
                </p>
            </div>
            </a>
        </div>
    </div>
</template>