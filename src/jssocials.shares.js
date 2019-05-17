(function(window, $, jsSocials, undefined) {

    "use strict";

    $.extend(jsSocials.shares, {

        email: {
            label: "E-mail",
            logo: "fa fa-at",
            shareUrl: "mailto:{to}?subject={text}&body={url}",
            countUrl: "",
            shareIn: "top"
        },

        twitter: {
            label: "Tweet",
            logo: "fa fa-twitter",
            shareUrl: "https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",
            countUrl: ""
        },

        facebook: {
            label: "Like",
            logo: "fa fa-facebook",
            shareUrl: "https://facebook.com/sharer/sharer.php?u={url}&quote={text}",
            countUrl: "ochServerSide"
        },

        googleplus: {
            label: "+1",
            logo: "fa fa-google",
            shareUrl: "https://plus.google.com/share?url={url}",
            countUrl: ""
        },

        linkedin: {
            label: "Share",
            logo: "fa fa-linkedin",
            shareUrl: "https://www.linkedin.com/shareArticle?mini=true&url={url}&text={text}",
            countUrl: ""
        },

        pinterest: {
            label: "Pin it",
            logo: "fa fa-pinterest",
            shareUrl: "https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",
            countUrl: "ochServerSide"
        },

        mix: {
            label: "Collect",
            logo: "fab fa-mix",
            shareUrl: "https://mix.com/add?url={url}",
            countUrl:  ""
        },

        pocket: {
            label: "Pocket",
            logo: "fa fa-get-pocket",
            shareUrl: "https://getpocket.com/save?url={url}&title={title}",
            countUrl: ""
        },

        whatsapp: {
            label: "WhatsApp",
            logo: "fa fa-whatsapp",
            shareUrl: "whatsapp://send?text={url} {text}",
            countUrl: "",
            shareIn: "top"
        },

        viber: {
            label: "Viber",
            logo: "fa fa-volume-control-phone",
            shareUrl: "viber://forward?text={url} {text}",
            countUrl: "",
            shareIn: "top"
        },

        messenger: {
            label: "Share",
            logo: "fa fa-commenting",
            shareUrl: "fb-messenger://share?link={url}",
            countUrl: "",
            shareIn: "top"
        },

        browser_messenger: {
            label: "Share",
            logo: "fa fa-commenting",
            shareUrl: "https://www.facebook.com/dialog/send?app_id={appid}&link={url}&redirect_uri={redirect}",
            countUrl: "",
            shareIn: "top"
        },

        telegram: {
            label: "Telegram",
            logo: "fa fa-telegram",
            shareUrl: "tg://msg_url?url={url}&text={text}",
            countUrl: "",
            shareIn: "top"
        },

        vkontakte: {
            label: "Like",
            logo: "fa fa-vk",
            shareUrl: "https://vk.com/share.php?url={url}&title={title}&description={text}",
            countUrl: "ochServerSide"
        },

        line: {
            label: "LINE",
            logo: "fa fa-comment",
            shareUrl: "http://line.me/R/msg/text/?{text} {url}",
            countUrl: ""
        },

        rss: {
            label: "RSS",
            logo: "fa fa-rss",
            shareUrl: "/feeds/",
            countUrl: ""
        },

        sms: {
            label: "SMS",
            logo: "fa fa-comments-o",
            shareUrl: "sms:{delimiter}body={text} {url}",
            delimiter: "?",
            countUrl: "",
            shareIn: "top"
        },

        reddit: {
            label: "Reddit",
            logo: "fa fa-reddit",
            shareUrl: "https://www.reddit.com/submit?url={url}",
            countUrl: ""
        }

    });

}(window, jQuery, window.jsSocials));

