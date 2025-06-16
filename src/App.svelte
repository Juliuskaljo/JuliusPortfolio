<script lang="ts">
    import Router from "svelte-spa-router";
    import About from "./lib/Pages/About.svelte";
    import Projects from "./lib/Pages/Projects.svelte";
    import Contact from "./lib/Pages/Contact.svelte";
    import { locale, t } from "./lib/i18n";

    function toggleLang() {
        locale.update((l) => (l === "sv" ? "en" : "sv"));
    }

    const routes = {
        "/": About,
        "/projects": Projects,
        "/contact": Contact,
    };
</script>

<nav>
    <a href="#/" class="navlink">{$t.about}</a>
    <p class="nav-devider">|</p>
    <a href="#/projects" class="navlink">{$t.projects}</a>
    <p class="nav-devider">|</p>
    <a href="#/contact" class="navlink">{$t.contact}</a>
    <button class="lang-btn" on:click|preventDefault={toggleLang}
        >{$t.language}</button
    >
</nav>

<main>
    <Router {routes} />
</main>

<style>
    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 20px;
        text-decoration: none;
    }

    .navlink {
        text-decoration: none;
        color: var(--green);
        font-family: "Bagel Fat One", system-ui;
    }

    .navlink.active {
        text-decoration: underline;
        text-decoration-thickness: 6px;
    }

    .nav-devider {
        margin: 0;
        color: var(--green);
    }

    .lang-btn {
        margin-top: 0.3em;
        margin-left: 1em;
        background-color: var(--green);

        border: none;
        border-radius: 50%;
        height: 26px;
        color: var(--beige);
    }

    @media (max-width: 1980px) {
        nav {
            margin-top: 1em;
            display: flex;
            flex-direction: row;
            justify-content: center;
            font-size: 20px;
            text-decoration: none;
        }

        .navlink {
            padding-left: 3em;
            margin-right: 2em;
        }
    }

    @media (max-width: 1024px) {
        nav {
            display: flex;
            flex-direction: row;
            justify-content: center;
            font-size: 20px;
            text-decoration: none;
        }

        .navlink {
            padding-left: 1.5em;
            margin-right: 1.5em;
        }
    }

    @media (max-width: 600px) {
        nav {
            display: flex;
            flex-direction: row;
            justify-content: center;
            font-size: 16px;
            text-decoration: none;
        }

        .navlink {
            padding-left: 0.5em;
            margin-right: 0.5em;
        }

        .lang-btn {
            margin-top: 0;
        }
    }

    @media (max-width: 355px) {
        nav {
            font-size: 14px;
        }
    }
</style>
