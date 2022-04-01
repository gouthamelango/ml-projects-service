/**
 * name : projectTemplateTask.js
 * author : Priyanka
 * created-date : 01-Sep-2021
 * Description : Project Templates helper for DB interactions.
 */

// Dependencies 
const { uuidFromString } = require('express-cassandra');
/**
    * ProjectTemplateTask
    * @class
*/

module.exports = class ProjectTemplateTask {

    /**
     * Lists of template tasks.
     * @method
     * @name taskDocuments
     * @param {Array} [filterData = "all"] - template filter query.
     * @param {Array} [fieldsArray = "all"] - projected fields.
     * @param {Array} [skipFields = "none"] - field not to include
     * @returns {Array} Lists of template. 
     */
    
    static taskDocuments(
        filterData = "all", 
        fieldsArray = "all",
        skipFields = "none"
    ) {
        return new Promise(async (resolve, reject) => {
            const queryObject = filterData != "all" ? filterData : {};
            const projection = fieldsArray != "all" ? fieldsArray : [];
            const omitFields = skipFields != "none" ? skipFields : [];
            try {
                if(queryObject["id"]) {
                    queryObject["id"] = uuidFromString(queryObject['id']);
                }
                const projectTemplateTasks = await cassandra.models.project_template_tasks.findAsync(
                    queryObject, 
                    {
                        select: projection,
                        raw: true,
                        allow_filtering: true,
                    });
                const templateTasksWithoutOmittedFields = projectTemplateTasks.map((template) =>
                    _.omit(template, omitFields)
                );
                return resolve(templateTasksWithoutOmittedFields);
            } catch (error) {
                console.log(error);
                return reject(error);
            }
       });
   }

   /**
   * Create project template task.
   * @method
   * @name createTemplateTask
   * @param {Object} [templateData] - template task Data.
   * @returns {Object} - Project template task data.
   */

    static createTemplateTask(templateData) {
        return new Promise(async (resolve, reject) => {
        
            try {
                const dataToSave = Array.isArray(templateData)
                    ? templateData
                    : [templateData];
                await Promise.all(
                    dataToSave.map(
                        (template) => {
                            let projectTemplate = new cassandraDatabase.models.project_template_task(template);
                            return projectTemplate.saveAsync(); //Returns a promise
                        }
                    )
                );
                return resolve();
            } catch (error) {
              return reject(error);
            }
        });
    }

    /**
    * Update projectTemplateTask document.
    * @method
    * @name updateTaskDocument
    * @param {Object} query - query to find document
    * @param {Object} updateObject - fields to update
    * @returns {String} - message.
    */

   static updateTaskDocument(query= {}, updateObject= {}) {
        return new Promise(async (resolve, reject) => {
            try {
                if(query["id"]) {
                    query["id"] = uuidFromString(query['id']);
                }

                if (Object.keys(query).length == 0) {
                    throw new Error(CONSTANTS.apiResponses.UPDATE_QUERY_REQUIRED)
                }

                if (Object.keys(updateObject).length == 0) {
                    throw new Error (CONSTANTS.apiResponses.UPDATE_OBJECT_REQUIRED)
                }

                await database.models.project_template_tasks.updateAsync(query, updateObject);
                (
                    query,
                    updateObject
                );
                
                // if (updateResponse.nModified == 0) {
                //     throw new Error(CONSTANTS.apiResponses.FAILED_TO_UPDATE)
                // }

                return resolve({
                    success: true,
                    message: CONSTANTS.apiResponses.UPDATED_DOCUMENT_SUCCESSFULLY,
                    data: true
                });

            } catch (error) {
                return resolve({
                    success: false,
                    message: error.message,
                    data: false
                });
            }
        });
   }

   /**
   * Update project templates task documents.
   * @method
   * @name findOneAndUpdate
   * @param {Object} [filterQuery] - filtered Query.
   * @param {Object} [updateData] - update data.
   * @returns {Object} - Project templates task data.
   */

    static findOneAndUpdate(findQuery,updateObject, returnData = {}) {
        return new Promise(async (resolve, reject) => {
            try {
                if(findQuery["id"]) {
                    findQuery["id"] = uuidFromString(findQuery['id']);
                }
                // Find one and update in express cassandra
                let instanceToUpdate = await cassandraDatabase.models.project_template_tasks.findOneAsync(findQuery);
                // spread operator can be used.
                for (let field in updateObject){
                    instanceToUpdate[field] = updateObject[field];
                }
                await instanceToUpdate.saveAsync();
                //Currently empty
                return resolve();
                   
            } catch (error) {
                console.log(error);
                return reject(error);
            }
        });
    }

};
