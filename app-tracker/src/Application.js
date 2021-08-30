
/**
 * @file Application.js
 * @author Devin Arena
 * @description Data store class for application info
 * @since 8/29/2021
 */

export default class Application {
    /**
     * Default constructor for Applications, all info must be entered.
     * 
     * @param {String} company the company or position name
     * @param {String} notes any user notes about the company
     * @param {Date} date the date the application was submitted
     * @param {int} interviews the number of interviews had for this position
     * @param {boolean} offer if an offer has been given
     * @param {boolean} rejection if a rejection has been given
     */
    constructor(company, notes, date, interviews, offer, rejection) {
        this.company = company;
        this.notes = notes;
        this.date = date;
        this.interviews = interviews;
        this.offer = offer;
        this.rejection = rejection;
    }
}