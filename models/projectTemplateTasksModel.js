module.exports = {

    schema: {
        fields: {
            name:{
                type: "varchar",
                rule : {
                    required: true
                }
            },
            description: {
                type: "varchar"
            },
            createdBy: {
                type: "varchar",
                default: "SYSTEM"
            },
            updatedBy: {
                type: "varchar",
                default: "SYSTEM"
            },
            isDeleted: {
                type: "boolean",
                default: false
            },
            externalId:{
                type: "varchar",
                rule : {
                    required: true
                }
            },
            type: {
                type: "varchar",
                rule : {
                    required: true
                }
            },
            // not there in db
            solutionDetails: {
                type: "map",
                typeDef: "<text, text>",
                default: {}
            },
             // not there in db
            parentId: {
                type: "uuid"
            },
            projectTemplateId : {
                type: "uuid",
                rule : {
                    required: true
                }
            },
            projectTemplateExternalId: {
                type : "varchar",
                rule : {
                    required: true
                }
            },
            isDeletable: {
                type: "boolean",
                default: true
            },
            taskSequence: {
                type: "list",
                typeDef: "<varchar>",
                default : []
            },
            children: {
                type: "list",
                typeDef : "<uuid>",
                default : []
            },
            // not in db
            improvementProjectDetails: {
                type: "map",
                typeDef: "<text, text>",
                default : {}
            },
            visibleIf: {
                type: "frozen",
                typeDef: "<visible_if>",
                default : []
            },
            hasSubTasks: {
                type: "boolean",
                default: false
            },
            learningResources : {
                type: "frozen",
                typeDef: "<learning_resources>",
                default : []
            },
            sequenceNumber: {
                type: "varchar"
            }

        },
        key: [["externalId"], "projectTemplateId", "projectTemplateExternalId" ],
    },
    name: "project_template_tasks",
    db_type: "cassandra"
} 
