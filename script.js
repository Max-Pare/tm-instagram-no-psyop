// ==UserScript==
// @name         No Psyop Instagram
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Glowies injecting propaganda and terror into your caveman brain? You just [redacted] them over, that's what you do.
// @author       Max-Pare
// @match        https://www.instagram.com*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instagram.com
// @grant        none
// ==/UserScript==

console.logc = (message) => {console.log('[InstaNoPsyop]: '+ message)}
const postFeedSel = '/html/body/div[1]/div/div/div[2]/div/div/div[1]/div[1]/div[1]/section/main/div[1]/div/div/div[2]'
const messagesButtonSel = '/html/body/div[1]/div/div/div[2]/div/div/div[1]/div[1]/div[1]/section/div[1]/div/div/div/div'
const storiesSel = '/html/body/div[1]/div/div/div[2]/div/div/div[1]/div[1]/div[1]/section/main/div[1]'
function callback()
{
    let postFeed = getElementByXpath(postFeedSel)
    if (postFeed) {
        postFeed.remove()
        console.logc('Psyops nuked')
    }

}

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
const mutConf = {subtree: false, childList: true, attributes: false }
const mutob = new MutationObserver(callback)
const mutTarget = document.body

mutob._observe = () => {mutob.observe(mutTarget, mutConf)}
mutob._observe()
