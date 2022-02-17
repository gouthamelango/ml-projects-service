module.exports = {
    schema: {
        fields: {
            projectTemplateId: {
                type: "uuid"
            },
            projectTemplateExternalId: {
                type: "varchar"
            },
            userId: {
                type: "uuid",
                default: "SYSTEM"
            },
            id: {
                type: "uuid",
            },
            userRole: {
                type: "varchar",
                default: ""
            },
            createdFor: {
                type: "list",
                typeof: "<varchar>"
            },
            status: {
                type: "varchar",
                default: "started"
            },
            isDeleted: {
                type: "boolean",
                default: false
            },
            categories: {
                type: "frozen",
                typeDef: "<categories>",
                default: []
            },
            createdBy: {
                type: "varchar",
                default: "SYSTEM"
            },
            updatedBy: {
                type: "varchar",
                default: "SYSTEM"
            },
            tasks: {
                type: "set",
                typeof: "<uuid>",
                default: []
            },
            rootOrganisations: {
                type: "list",
                typeof: "<varchar>"
            },
            learningResources: {
                type: "fozen",
                typeDef: "<learning_resources>",
                default: []
            },
            description: {
                type: "varchar"
            },
            title: {
                type: "varchar"
            },
            metaInformation: {
                type: "fozen",
                typeDef: "<meta_information>",
                default: {}
            },
            taskReport: {
                type: "map",
                typeDef: "<varint, varchar>",
                default: {}
            },
            updatedAt: { type: "timestamp" },
            createdAt: { type: "timestamp" },
            startDate: { type: "timestamp" },
            endDate: { type: "timestamp" },

            entityId: {
                type: "uuid",
            },
            solutionId: {
                type: "uuid",
            },
            programId: {
                type: "uuid",
            },
            solutionExternalId: {
                type: "varchar",
            },
            programExternalId: {
                type: "varchar",
            },
            entityInformation: {
                type: "map",
                typeDef: "<text, text>",
                default: {}
            },
            programInformation: {
                type: "map",
                typeDef: "<text, text>",
                default: {}
            },
            solutionInformation: {
                type: "map",
                typeDef: "<text, text>",
                default: {}
            },
            appInformation: {
                type: "map",
                typeDef: "<varchar, varchar>"
            },
            lastDownloadedAt: {
                type: "timestamp"
            },
            syncedAt: {
                type: "timestamp"
            },
            submissions: {
                type: "map",
                typeDef: "<varchar, text>"
            },
            isAPrivateProgram: {
                type: "boolean",
                default: true
            },
            hasAcceptedTAndC: {
                type: "boolean",
                default: false
            },
            referenceFrom: {
                type: "varchar",
            },
            link: {
                type: "varchar"
            },
            taskSequence: {
                type: "list",
                typeof: "<varchar>",
                default: []
            },
            completedDate: {
                type: "timestamp"
            },
            recommendedFor: {
                type: "list",
                typeof: "<varchar>",
                default: []
            }
        },
        key: ["id"]
    },
    name: "projects",
    db_type: "cassandra"
}