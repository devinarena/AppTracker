
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
     * @param {int} id the application id to keep it unique
     * @param {String} company the company or position name
     * @param {String} notes any user notes about the company
     * @param {String} date the date the application was submitted
     * @param {int} interviews the number of interviews had for this position
     * @param {boolean} offer if an offer has been given
     * @param {boolean} rejection if a rejection has been given
     */
    constructor(id, company, notes, date, interviews, offer, rejection) {
        this.id = id;
        this.company = company;
        this.notes = notes;
        this.date = date;
        this.interviews = interviews;
        this.offer = offer;
        this.rejection = rejection;
    }
}