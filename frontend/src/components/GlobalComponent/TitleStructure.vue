<template>
    <div class="m-0">
        <div class="d-flex align-items-center">
            <h3 class="label fw-bold me-3" style="color: #555555">
                {{ title }}
            </h3>
            <slot></slot>
        </div>
        <div class="line my-3"></div>
    </div>
</template>

<script>
export default {
    name: "TitleStructure",
    props: {
        title: { type: String },
    },
};
</script>

<style></style>
