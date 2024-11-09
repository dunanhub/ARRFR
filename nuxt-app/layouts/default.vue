<!-- <script lang="ts" setup>
    import Sidebar from '~/components/layout/Sidebar.vue';
</script> -->

<template>
    <section class="grid" style="grid-template-columns: 1fr 6fr;">
        <div class="p-2">
            <LayoutSidebar />
        </div>
        <div>
            <slot />
        </div>
    </section>
</template>