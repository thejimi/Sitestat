/**
 * @name Sitestat-Handle
 * @author thejimi/Sitestat
 * @description Handling the request, to apply to all put this in '*' request.
 * @param {handle} response - Express.js Response Object (res)
 * @param {handle} request - Express.js Request Object (req)
 * @param {handle} config - Sitestat Configuration Construction
*/

const handle = (response, request, config) => {
    console.log("Request made")
}

module.exports = { handle }