<template>
    <button @click="$emit('triggered')"><slot></slot></button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
button {
    --primary: #394655;
    background: var(--primary);
    color: white;
    border-radius: 0.25em;
    box-shadow: inset 0 -4px 6px 0px #11171e;
    padding: 0.25em 1em;
    line-height: 3;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .15em;
    &:hover {
        filter: brightness(1.2);
    }
}
</style>