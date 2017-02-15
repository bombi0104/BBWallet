/**
 * Utils class
 * 
 * @author AnhTai <taipa@cardano-labo.com>
 */

export default class Utils {
    /**
     * Create a route to a screen
     * @param targetScreen : targetScreen's screen key
     * @param type : Type of route (push or pop), default is push
     */
    static routeTo(targetScreen, type = 'push') {
        return {
            type: type,
            route: {
                key: targetScreen,
                title: targetScreen
            }
        }
    }

    /**
	  * Test if Obj is empty
	  */
    static objIsEmpty(obj) {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }
        return true;
    }

	/**
	  * Convert Obj to Arr
	  */
    static objToArr(obj) {
        return Object.keys(obj).map(function (k) { return obj[k] });
    }

	/**
	  * Get First Item in Object
	  */
    static firstIndexInObj(obj) {
        for (let a in obj) return a;
    }
}