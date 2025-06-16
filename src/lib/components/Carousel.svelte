<script lang="ts">
    import emblaCarousel from "embla-carousel-svelte";
    import type { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
    import { onMount } from "svelte";
    import { t } from "../i18n";

    let emblaApi: EmblaCarouselType | null = null;
    let selectedIndex = 0;

    const slides = [
        {
            id: 1,
            text: "Pokemon",
            captionKey: "pokemon",
            imgUrl: "/poke.png",
            link: "https://juliuskaljo.github.io/Pokemon-submission/",
        },
        {
            id: 2,
            text: "Hangman",
            captionKey: "hangman",
            imgUrl: "/hangman.svg",
            link: "https://wilmaniklasson.github.io/Hangman/",
        },
        {
            id: 3,
            text: "Masa Fejuja",
            captionKey: "resturant",
            imgUrl: "/restaurant.svg",
            link: "https://ha-fed23-js-2.github.io/ruby-bananas/",
        },
    ];

    const options: EmblaOptionsType = {
        loop: true,
        align: "center",
        skipSnaps: false,
    };

    const emblaParams = {
        options,
        plugins: [],
    };

    function updateSelected() {
        if (emblaApi) {
            selectedIndex = emblaApi.selectedScrollSnap();
        }
    }

    onMount(() => {
        emblaApi?.on("select", updateSelected);
        updateSelected();
    });
</script>

<main class="project-page">
    <h1 class="project-header">{$t.project}</h1>
    <div class="carousel">
        <div
            class="viewport"
            use:emblaCarousel={emblaParams}
            on:emblaInit={(e) => {
                emblaApi = e.detail;
                emblaApi.on("select", updateSelected);
                updateSelected();
            }}
        >
            <div class="container">
                {#each slides as slide}
                    <div class="slide-wrapper">
                        <a href={slide.link}>
                            <div class="slide">
                                <img
                                    class="slide-pic"
                                    src={slide.imgUrl}
                                    alt="Bild för {slide.text}"
                                />
                                <h2>{slide.text}</h2>
                            </div></a
                        >
                    </div>
                {/each}
            </div>

            <div class="dots">
                {#each slides as _, index}
                    <!-- svelte-ignore a11y_consider_explicit_label -->
                    <button
                        class:selected={index === selectedIndex}
                        on:click={() => emblaApi?.scrollTo(index)}
                    ></button>
                {/each}
            </div>

            <p class="about-slide">{$t[slides[selectedIndex].captionKey]}</p>
        </div>
    </div>
</main>

<style>
    .project-header {
        text-align: center;
        font-size: 22px;
    }

    .project-page {
        margin: 0;
    }

    .carousel {
        margin: auto;
        position: relative;
        max-width: 500px;
        overflow: hidden;
    }

    .viewport {
        overflow: hidden;
        box-sizing: border-box;
    }

    .container {
        display: flex;
        /* gap: 1px; */

        box-sizing: border-box;
    }

    .slide-wrapper {
        flex: 0 0 65%;
        display: flex;
    }

    .slide {
        width: 100%;
        border-radius: 0.5em;
        background-color: var(--green);
        padding: 2rem;
        text-align: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .slide-pic {
        width: 180px;
    }

    h2 {
        color: #34631f;
    }

    .dots {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        margin-top: 10px;
        margin-bottom: 0.5em;
    }

    .dots button {
        width: 12px;
        height: 12px;
        border-radius: 10px;
        background: #3b5734;
        border: none;
        cursor: pointer;
        background-color: var(--green);
    }

    .dots button.selected {
        background: #333;
    }

    .about-slide {
        width: 290px;
        margin: 0 auto;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #444;
        text-align: center;
        word-wrap: break-word;
    }

    a {
        text-decoration: none;
    }

    @media (max-width: 486px) {
        .slide-wrapper {
            flex: 0 0 25%;
        }

        .slide {
            width: 70%;
        }
    }
</style>
