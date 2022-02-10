/**
 * Colorful logger class for the Chariot.js Client framework featuring various log levels. This logger class is used primarily internally
 */
class Logger {
	/**
     * Pads a single number for unified looks in the console
     * @param {number} number The number that should be force-padded
     * @returns {number} The padded number
     */
	static _forcePadding(number) {
		return (number < 10 ? '0' : '') + number;
	}

	/**
     * Gets the full current system time and date for logging purposes
     * @returns {string} The formatted current time
     */
    static _getCurrentTime() {
        const now    = new Date();
        const day    = this._forcePadding(now.getDate());
        const month  = this._forcePadding(now.getMonth() + 1);
        const year   = this._forcePadding(now.getFullYear());
        const hour   = this._forcePadding(now.getHours());
        const minute = this._forcePadding(now.getMinutes());
        const second = this._forcePadding(now.getSeconds());

        return `${day}.${month}.${year} ${hour}:${minute}:${second}`;
    }

    /**
     * Log something related to being successful
     * @param {string} title The title of the log enty
     * @param {string} body The body of the log entry
     * @returns {void}
     */
    static success(title, body) {
        console.log(`\u001b[91m[ ${this._getCurrentTime()} ] [ ${title} ] ${body}\u001b[91m`);
    }

    /**
     * Log something related to a warning
     * @param {string} title The title of the log enty
     * @param {string} body The body of the log entry
     * @returns {void}
     */
    static warning(title, body) {
        console.log(`\x1b[93m[ ${this._getCurrentTime()} ] [ ${title} ] ${body}`);
    }

    /**
     * Log something related to an error
     * @param {string} title The title of the log enty
     * @param {string} body The body of the log entry
     * @returns {void}
     */
    static error(title, body) {
        console.log(`\x1b[91m[ ${this._getCurrentTime()} ] [ ${title} ] ${body}`);
    }

    /**
     * Log something related to debugging
     * @param {string} title The title of the log enty
     * @param {string} body The body of the log entry
     * @returns {void}
     */
    static debug(title, body) {
        console.log(`\x1b[95m[ ${this._getCurrentTime()} ] [ ${title} ] ${body}`);
    }

    /**
     * Log something related to an event
     * @param {string} body The body of the log entry
     * @returns {void}
     */
    static event(body) {
        console.log(`\x1b[97m[ ${this._getCurrentTime()} ] [ Event ] ${body}`);
    }

    /**
     * Log something related to command usage
     * @param {string} body The body of the log entry
     * @returns {void}
     */
    static command(body) {
        console.log(`\x1b[92m[ ${this._getCurrentTime()} ] [ Command ] ${body}`);
    }
}

module.exports = Logger;
