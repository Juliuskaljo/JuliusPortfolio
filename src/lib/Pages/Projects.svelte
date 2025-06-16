<script lang="ts">
    import Carousel from "../components/Carousel.svelte";
    import Experience from "../components/Experience.svelte";
    import Footer from "../components/Footer.svelte";
    import Language from "../components/Language.svelte";
</script>

<main>
    <div class="project-page">
        <Carousel />
        <Experience />
        <Language />
    </div>
</main>

<footer>
    <Footer />
</footer>

<style>
    .project-page {
        margin-top: 3em;
    }
</style>
