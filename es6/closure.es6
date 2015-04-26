let closure = (function() {

    // Private
	var msg = 'message';
	function theMsg() {
		return `secret ${msg}`;
	}

    // Public
	return function() {
        return `closure > ${msg}`;
    };
})();
export default closure;
