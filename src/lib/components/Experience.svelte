<script>
    import { t } from "../i18n";
</script>

<main class="experience-page">
    <h2 class="experience-title">{$t.experienceTitle}</h2>
    <div class="experience-container">
        <div class="experience-wrapper">
            <p class="experience-text">
                {@html $t.experience}
            </p>
        </div>
    </div>
</main>

<style>
    .experience-page {
        margin-top: 2em;
    }

    .experience-title {
        text-align: center;
        font-size: 22px;
        margin-bottom: 1em;
    }

    .experience-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .experience-wrapper {
        display: flex;
        justify-content: center;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        padding: 3em;
        box-sizing: border-box;
        width: 100%;
        height: 60vh;
    }

    .experience-text {
        width: 80%;
        padding-left: 4em;
        padding-right: 4em;
        padding-top: 2em;
        text-align: center;
        color: rgb(31, 51, 30);
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        box-sizing: border-box;
    }

    /* Desktop */
    @media (min-width: 981px) {
        .experience-wrapper {
            width: 900px;
            background-image: url("/div-desktop.svg");
        }
    }

    /* Tablet (601–980px) */
    @media (max-width: 980px) and (min-width: 860px) {
        .experience-wrapper {
            width: 90%;
            background-image: url("/div-desktop.svg");
        }

        .experience-text {
            width: 85%;
            /* padding: 1.5em; */
            font-size: 15px;
        }
    }

    @media (max-width: 860px) and (min-width: 651px) {
        .experience-wrapper {
            width: 600px;
            background-image: url("/div-desktop.svg");
        }

        .experience-text {
            width: 85%;
            padding: 0;
            padding-top: 2em;
            font-size: 15px;
        }
    }

    @media (max-width: 650px) and (min-width: 430px) {
        .experience-wrapper {
            background-image: url("/div-tablet.svg");
            padding: 3em;
            height: auto;
        }

        .experience-text {
            width: 250px;
            padding: 0;
            font-size: 12px;
        }
    }

    @media (max-width: 429px) {
        .experience-wrapper {
            background-image: url("/div-tablet.svg");
        }

        .experience-text {
            width: 250px;
            height: 400;
            font-size: 12px;
            padding: 0;
            margin-top: 1em;
        }
    }

    @media (max-width: 400px) {
        .experience-page {
            margin-top: 2em;
        }

        .experience-wrapper {
            background-image: url("/div-tablet3.svg");
            margin-top: 0;
            padding-top: 0;
        }

        .experience-text {
            width: 250px;
            height: 400;
            font-size: 10px;
            padding: 0;
            padding-top: 3em;
        }

        .experience-title {
            margin: 0;
        }
    }
</style>
