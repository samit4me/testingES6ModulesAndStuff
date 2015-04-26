let closurePlus = (function() {

    // Private
    var msg = 'message';
    function theMsg() {
        return `closure private method > secret ${msg}`;
    }

    // Public
    return {
        getPublicMsg: function() {
            return `closure public method > ${msg}`;
        },
        getPrivateMsg: function() {
            return theMsg();
        }
    };
})();

let getPublicMsg = closurePlus.getPublicMsg;
let getPrivateMsg = closurePlus.getPrivateMsg;

export default closurePlus;
export { getPublicMsg as pubMsg, getPrivateMsg };
