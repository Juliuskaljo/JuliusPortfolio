<script lang="ts">
    const icons = [
        { imgUrl: "javascript-logo-svgrepo-com.svg" },
        { imgUrl: "typescript-official-svgrepo-com.svg" },
        { imgUrl: "svelte-svgrepo-com.svg" },
        { imgUrl: "React.webp" },
        { imgUrl: "git-svgrepo-com.svg" },
        { imgUrl: "playwright.png" },
        { imgUrl: "css-3-svgrepo-com.svg" },
        { imgUrl: "tailwind-svgrepo-com.svg" },
    ];
</script>

<main class="frameworks">
    <h2>Verktyg och Frameworks</h2>
    <div class="grid-container">
        {#each icons as icon}
            <img class="code-icon" src={icon.imgUrl} alt="tech logo" />
        {/each}
    </div>
</main>

<style>
    .frameworks {
        margin-top: 5em;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    h2 {
        text-align: center;
        font-size: 22px;
        margin-bottom: 1em;
    }

    .grid-container {
        display: grid;
        grid-template-columns: repeat(2, auto);
        gap: 2rem;
        justify-content: center;
        align-items: center;
        margin-bottom: 2em;
    }

    .code-icon {
        width: 6em;
    }

    @media (max-width: 660px) {
        .code-icon {
            width: 4em;
        }
    }
</style>
