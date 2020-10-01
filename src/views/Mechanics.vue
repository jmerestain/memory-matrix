<template>
    <div id="mechanics-mm" class="flex flex-col container mx-auto justify-center">
        <img src="../assets/img/MECHANICS.png"
        class="mx-auto max-w-md mt-10 p-4 w-full"/>
        <div class="bg-mechanics text-mechanics m-10
        border-3 border-mechanics flex flex-col mt-10">
            <div class="flex flex-row flex-wrap justify-around items-center">
                <div class="max-w-3xl p-10">
                    <p class="text-2xl font-medium pb-5">
                        A puzzle game where players try to remember squares on a grid.
                    </p>
                    <p class="text-xl font-medium pl-4 pb-3">
                        Remember which squares are marked as gold at the start!
                    </p>
                    <p class="text-xl font-medium pl-4 pb-3">
                        Tap the dark squares to turn them over.
                        You get a point for each correctly remembered
                        gold square, and a penalty for each error.
                    </p>
                    <p class="text-xl font-medium pl-4">
                        The less errors you make, the higher your score will be. Do your best!
                    </p>
                </div>
                <img width="358.4px" height="417.2px"
                class="p-5 mx-auto md:mx-0 lg:mx-0"
                :src="require('@/assets/img/mech-1-ex.png')" />
            </div>
            <router-link to="/game" class="text-white uppercase text-3xl
            bg-started py-2 px-8 mb-2 border-2 rounded-lg
            border-double mx-auto text-center title tracking-wider">
                Ready
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Mechanics',
};
</script>

<style>
.bg-started {
    background: #24397A;
}
.title {
    font-family: ChalkitUp;
    font-weight: 300;
}
.bg-mechanics {
  background: #F4D7A1 90%;
}
.text-mechanics {
  color: #6A3D08;
}
.bg-alphacamp {
  background-color: #6D3B00;
}
.border-mechanics {
  border: solid #6A3D08;
}
</style>
