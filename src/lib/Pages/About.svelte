<script lang="ts">
    import Footer from "../components/Footer.svelte";
    import { t } from "../i18n";
</script>

<main>
    <div class="about-page">
        <div class="profile-border">
            <img
                class="profile-picture"
                src="jullesportfolio1.png"
                alt="Julius Kaljo"
            />
            <h1 class="name">Julius Kaljo</h1>
        </div>

        <div class="about-container">
            <div class="about-wrapper">
                <!-- <img class="about-div" src="div.svg" alt="div" /> -->
                <p class="about-text">
                    {@html $t.abouttext}
                </p>
            </div>
        </div>
    </div>
</main>

<footer>
    <Footer />
</footer>

<style>
    .profile-border {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .profile-picture {
        width: 13em;
        border-radius: 2em;
        margin-left: -4em;
    }

    .name {
        font-size: 34px;
        margin-top: 0.3em;
        margin-bottom: 0;
    }

    .about-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2em;
    }

    .about-wrapper {
        display: flex;
        justify-content: center;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        padding: 3em;
        box-sizing: border-box;
        /* width: 100%; */
        width: 900px;
    }

    .about-text {
        width: 80%;
        padding: 2em;
        text-align: center;
        color: rgb(31, 51, 30);
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        box-sizing: border-box;
    }

    footer {
        margin-top: 2em;
    }

    /* ✅ Desktop: från 981px uppåt */
    @media (min-width: 981px) {
        .about-wrapper {
            width: 900px;
            background-image: url("/div-desktop.svg");
        }
    }

    /* ✅ Tablet: 601px till 980px */
    @media (max-width: 980px) and (min-width: 860px) {
        .about-wrapper {
            width: 90%;
            background-image: url("/div-desktop.svg");
        }

        .about-text {
            width: 85%;
            padding: 1.5em;
            font-size: 15px;
        }
    }

    @media (max-width: 860px) and (min-width: 601px) {
        .about-wrapper {
            width: 600px;
            background-image: url("/div-tablet.svg");
        }

        .about-text {
            width: 85%;
            padding: 0;
            font-size: 15px;
        }
    }

    @media (max-width: 600px) {
        .about-wrapper {
            width: 100%;
            background-image: url("/div-tablet1.svg");
            padding: 3em;
        }

        .about-text {
            width: 240px;
            padding: 0;
            font-size: 14px;
        }

        .profile-picture {
            width: 10em;
            margin-left: 0;
        }

        .name {
            font-size: 24px;
            text-align: center;
        }
    }

    /* ✅ Mobil: 600px och neråt */
    @media (max-width: 355px) {
        .about-wrapper {
            /* width: 100%; */
            background-image: url("/div-mobile7.svg");
            padding: 5em;
        }

        .about-text {
            width: 220px;
            padding: 0;
            font-size: 12px;
        }

        .profile-picture {
            width: 10em;
            margin-left: 0;
        }

        .name {
            font-size: 24px;
            text-align: center;
        }
    }
</style>
