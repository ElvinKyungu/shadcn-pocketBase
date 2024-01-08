<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Stats</h2>

    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-2">
        <div class="p-4 bg-green-100 rounded-xl">
          <div class="font-bold text-xl text-gray-800 leading-none">Hello, <br>Elvin</div>
          <div class="mt-5">
            <button type="button" class="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition">
              Start working
            </button>
          </div>
        </div>
      </div>
      <div class="p-4 bg-yellow-100 rounded-xl text-gray-800">
        <div class="font-bold text-2xl leading-none">20</div>
        <div class="mt-2">Tasks finished</div>
      </div>
      <div class="p-4 bg-yellow-100 rounded-xl text-gray-800">
        <div class="font-bold text-2xl leading-none">4</div>
        <div class="mt-2">Remaining tasks</div>
      </div>
      <div class="col-span-2">
        <div class="p-4 bg-purple-100 rounded-xl text-gray-800">
          <div class="font-bold text-xl leading-none">Your daily plan</div>
          <div class="mt-2">20 of 24 completed</div>
        </div>
      </div>
    </div>
  </div>
</template>