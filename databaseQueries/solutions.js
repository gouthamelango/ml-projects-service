/**
 * name : solutions.js
 * author : Vishnu
 * created-date : 26-Jan-2022
 * Description : solutions helper for DB interactions.
 */

// Dependencies 
const { uuidFromString } = require('express-cassandra');
/**
    * Solutions
    * @class
*/



module.exports= class Solutions{
    /**
     * Solution details.
     * @method
     * @name solutionsDocument
     * @param {Array} [filterData = "all"] - solutions filter query.
     * @param {Array} [fieldsArray = "all"] - projected fields.
     * @param {Array} [skipFields = "none"] - field not to include
     * @returns {Array} solutions details.
     */
    
     static solutionsDocument(
        filterData = "all", 
        fieldsArray = "all",
        skipFields = "none"
    ) {
        return new Promise(async (resolve, reject) => {
            let queryObject = (filterData != "all") ? filterData : {};
            const projection = fieldsArray != "all" ? fieldsArray : [];
            const omitFields = skipFields != "none" ? skipFields : [];
       
            try {
                if(queryObject["id"]) {
                    queryObject["id"] = uuidFromString(queryObject['id']);
                }
                const solutions = await cassandra.models.solutions.findAsync(
                    queryObject, 
                    {
                        select: projection,
                        raw: true,
                        allow_filtering: true,
                    });
                const solutionsWithoutOmittedFields = solutions.map((solution) =>
                    _.omit(template, omitFields)
                );
                return resolve(solutionsWithoutOmittedFields);
           } catch (error) {
               console.log(error);
               return reject(error);
           }
       });
   }
}