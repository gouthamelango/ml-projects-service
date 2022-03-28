module.exports = {

    schema: {
        fields: {

            isReusable: {
                type: 'boolean',
                default: false,
            },
            status: {
                type: "varchar",
                required: true,
            },
            externalId: {
                type: "varchar",
                required: true,
            },
            id: {
                type: "uuid"
            },
            solutionId: {
                type: "uuid"
            },
            solutionExternalId: {
                type: "text"
            },
            programId: {
                type: "uuid"
            },
            programExternalId: {
                type: "text"
            },
            parentTemplateId: {
                type: "uuid",
                index: true
            },
            metaInformation: {
                type: "frozen",
                typeDef: "<meta_information>"
            },
            entityType: {
                type: "text"
            },
            title: {
                type: "text",
                required: true,
            },
            deleted: {
                type: "boolean",
                default: false
            },
            ratings: {
                type: "map",
                default: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0
                },
                typeDef:"<int,int>"
            },
            noOfRatings: {
                type: "int",
                default: 0
            },
            averageRating: {
                type: "int"
            },
            noOfRatings: {
                type: "int",
                default: 0
            },
            createdBy: {
                type: "varchar",
                default: "SYSTEM"
            },
            updatedBy: {
                type: "varchar",
                default: "SYSTEM"
            },
            description: {
                type: "varchar",
                default: ""
            },
            keywords: {
                type: "list",
                typeDef: "<varchar>",
                default: []
            },
            learningResources: {
                type: "frozen",
                typeDef: "<learning_resources>",
                default: []
            },
            categories: {
                type: "frozen",
                typeDef: "<categories>"
            },
            createdAt: {
                type: "timestamp",
            },
            updatedAt: {
                type: "timestamp",
            },
            taskCreationForm: {
                type: "varchar"
            },
            concepts: {
                type: "list",
                typeDef: "<varchar>"
            },
            recommendedFor: {
                type: "frozen",
                typeDef: "<recommended_for>"
            },
            tasks: {
                type: "set",
                typeDef: "<uuid>",
                default : []
            },
            taskSequence: {
                type: "list",
                typeDef: "<varchar>"
            },
            __v: {
                type: "int"
            },
            isDeleted: {
                type: "boolean"
            },
        },
        key: ["id"],
    },
    name: "project_templates",
    db_type: "cassandra"
} 
