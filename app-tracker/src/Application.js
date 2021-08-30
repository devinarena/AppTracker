
/**
 * @file Application.js
 * @author Devin Arena
 * @description Data store class for application info
 * @since 8/29/2021
 */

export default class Application {
    constructor(company, date, interviews, offer, rejection) {
        this.company = company;
        this.date = date;
        this.interviews = interviews;
        this.offer = offer;
        this.rejection = rejection;
    }
}