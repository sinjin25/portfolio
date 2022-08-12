<template>
    <div class="project-desc">
        <div class="project-desc__section">
            <slot name="desc"></slot>
        </div>
        <div class="project-desc__section">
            <slot name="tech">
            </slot>
        </div>
        <div class="project-desc__cta">
            <slot name="cta"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.project-desc {
    --primary: var(--dark);
    background: var(--primary);
    color: white;
    line-height: 1.5;
    font-size: 1.1rem;
    padding: 0.5rem 2em;
    padding-top: 2rem;
    h2 {
        font-size: 1.5rem;
        line-height: 2;
    }
    li {
        &::before {
            content: "- ";
        }
    }
    &__section {
        max-width: 60ch;
        margin: 0 auto;
        border-left: 3px solid #0c1015;
        margin-bottom: 1rem;
        padding-left: 1em;
        position: relative;
        h2 { padding-left: 0; }
        > * {
            padding-left: 1em;
        }
    }
    &__cta {
        margin: 2rem 0;
        text-align: center;
    }
}
</style>