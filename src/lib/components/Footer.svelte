<script lang="ts">
    import { t } from "../i18n";
</script>

<footer>
    <div class="footer">
        <div class="contact-info">
            <p>julius.kaljo@hotmail.se</p>
            <p>0760293379</p>
            <p>{$t.city}</p>
        </div>
        <div class="socials">
            <a href="https://github.com/Juliuskaljo?tab=repositories">
                <img class="logo" src="github.svg" alt="github-logo" /></a
            >
            <a href="https://www.linkedin.com/in/julius-kaljo-923875229/">
                <img class="logo" src="linkedin.svg" alt="linkedin-logo" /></a
            >
            <a href="https://www.instagram.com/juliuskaljo/#">
                <img class="logo" src="insta.svg" alt="instagram-logo" /></a
            >
            <a href="https://www.facebook.com/julius.kaljo/">
                <img class="logo" src="facebook.svg" alt="facebook-logo" /></a
            >
        </div>
    </div>
</footer>

<style>
    .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 2em;
    }

    .contact-info,
    p {
        text-align: center;
        margin: 0.2em;
    }
    .logo {
        width: 40px;
        height: 40px;
    }

    @media (max-width: 640px) {
        .contact-info,
        p {
            font-size: 14px;
        }

        .logo {
            width: 30px;
            height: 30px;
        }
    }
</style>
