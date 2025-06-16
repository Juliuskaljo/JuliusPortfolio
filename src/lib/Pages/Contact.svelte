<script lang="ts">
    import Footer from "../components/Footer.svelte";
    import { t } from "../i18n";
</script>

<main>
    <div class="contact-page">
        <div class="contact-info">
            <h3>
                {$t.contacttext}
            </h3>

            <div class="contact-div">
                <section class="contact-row">
                    <img class="contact-icons" src="mail.svg" alt="" />
                    <a href="mailto:">julius.kaljo@hotmail.se</a>
                </section>

                <section class="contact-row">
                    <img class="contact-icons" src="phone.svg" alt="" />
                    <a href="tel:+46760293379">0760293379</a>
                </section>
            </div>
        </div>
    </div>
</main>

<footer>
    <Footer />
</footer>

<style>
    .contact-page {
        height: 80vh;
    }

    .contact-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        h3 {
            margin: 3em 1em 1em 1em;
        }
    }

    .contact-div {
        display: flex;
        flex-direction: column;

        .contact-icons {
            width: 30px;
        }
    }

    .contact-row {
        display: flex;
        justify-content: center;

        a {
            color: var(--green);
        }
    }
</style>
