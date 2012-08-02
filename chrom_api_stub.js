/**
 * Chrome Javascript API stub
 *
 * @author <a href="mailto:linux_china@hotmail.com">Jacky Chan</a>
 */

/**
 * Chrome API's base object
 * @type {Object}
 */
var chrome = {
    "alarms":{
        /**
         * Clears the alarm with the given name
         * @param {String} name  The name of the alarm to clear
         */
        "clear":function (name) {

        },
        "demo":""
    },
    /**
     * the chrome.bookmarks module to create, organize, and otherwise manipulate bookmarks
     */
    "bookmarks":{

    },
    /**
     * browser actions to put icons in the main Google Chrome toolbar, to the right of the address bar
     */
    "browserAction":{

    },
    /**
     * the chrome.browsingData module to remove browsing data from a user's local profile
     */
    "browsingData":{

    },
    /**
     * The content settings module allows you to change settings that control whether websites can use features such as cookies, JavaScript, and plug-ins
     */
    "contentSettings":{

    },
    /**
     * The context menus module allows you to add items to Google Chrome's context menu.
     */
    "contextMenus":{

    },
    /**
     * The cookies module allows you to operate cookie
     */
    "cookies":{

    },
    /**
     * The chrome.extension module has utilities that can be used by any extension page
     */
    "extension":{
        /**
         * get background page
         */
        "getBackgroundPage":function () {

        }
    }
};

/**
 * webkit notifications
 * @type {Object}
 */
var webkitNotifications = {
    /**
     * Causes the notification to displayed to the user
     */
    "show":function () {

    },
    /**
     * Causes the notification to not be displayed
     */
    "cancel":function () {

    },
    /**
     * Creates a new notification object with the provided content
     * @param {String} iconUrl  icon url
     * @param {String} title title
     * @param {String} body body
     */
    "createNotification":function (iconUrl, title, body) {

    },
    /**
     * The parameter url contains the URL of a resource which contains HTML content to be shown as the content of the notification
     * @param {String} url page url
     */
    "createHTMLNotification":function (url) {

    }
}







