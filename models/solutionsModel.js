module.exports = {

    schema: {
        fields: {

            type: {
                type: "varchar"
            },
            reusable: {
                type: "boolean"
            },

            solutionId: {
                type: "uuid"
            },

            resourceType: {
                type: "list",
                typeDef: "<varchar>"
            },

            language: {
                type: "list",
                typeDef: "<varchar>"
            },
            keywords: {
                type: "list",
                typeDef: "<varchar>"

            },

            createdFor: {
                type: "list",
                typeDef: "<varchar>"
            },
            // Did not verify with DB
            entities: {
                type: "list",
                typeDef: "<varchar>"
            },
            // {/* <levelToScoreMapping> <text, <varchar, varchar>> */}
            entityTypeId: {
                type: "uuid"
            },
            entityType: {
                type: "varchar"
            },
            evidencesMethod: {
                type: "frozen",
                typeDef: "<evidence_solution>"
            },
            sections: {
                type: "map",
                typeDef: "<varchar, varchar>"
            },
            status: {
                type: "varchar"

            },
            //TRY IT OUT
            questionSequenceByEcm: {
                type: "map",
                typeDef : "<text, text>"

            },
            frameworkId: {
                type: "uuid"
            },

            frameWorkExternalId: {
                type: "varchar"
            },

            name: {
                type: "varchar"
            },

            description: {
                type: "varchar"
            },
            author: {
                type: "varchar"
            },
            deleted: {
                type: "boolean"
            },
            isRubrikDriven: {
                type: "boolean"
            },
            allowMultipleAssessemts: {
                type: "boolean"
            },
            isAPrivateProgram: {
                type: "boolean",
                default: false
            },
            assessmentMetaFormKey: {
                type: "text"
            },


            concepts: {
                type: "list",
                typeDef: "<varchar>"
            },

            // *[themes]* themes
            flattenedThemes: {

                type: "list",
                //  flattenedThemes
                typeDef: "<varchar>"
            },

            // [entities]
            registry: {
                type: "list",
                typeDef: "<varchar>",
                default: []
            },
            enableQuestionsReadout: {
                type: "boolean"
            },
            ///roles  not defined in docs:
            // roles: {
            //     type: "<varchar , varchar>"
            // },
            observationMetaFormKey: {
                type: "text"
            },


            captureGpsLocationAtQuestionLevel: {
                type: "boolean",
                default: false
            },
            sendSubmissionRatingEmailsTo: {
                type: "text",
            },
            project: {
                type: "map",
                typeDef: "<varchar,varchar>"
            },

            referenceFrom: {
                type: "varchar"
            },
            //scope i have not defined


            deleted: {
                type: "boolean"
            },
            rootOrganisations: {
                type:"list",
                typeDef: "<varchar>"
            },
            pageHeading: {
                type: "varchar",
                default: "Domains"
            },
            criteriaLevelReport: {
                type: "boolean"
            },

            externalId: {
                type: "varchar"
            },

            // levelToScoreMapping: {
            //     type: "map",

            //     typeDef: "<text,frozen<map <varchar, text>>>"
            // },

            scoringSystem: {
                type: "varchar"
            },
            noOfRatingLevels: {
                type: "int"
            },
            isRubricDriven: {
                type: "boolean",
                default: false
            },
            enableQuestionReadOut: {
                type: "boolean",
                default: false
            },

            linkTitle: {
                type: "text",
            },
            linkUrl: {
                type: "text",
            },
            updatedBy: {
                type: "varchar"
            },
            createdAt: {
                type: "timestamp"
            },
            updatedAt: {
                type: "timestamp"
            },
            //not there in doc
            entityProfileFieldsPerEntityTypes: {
                type: "map",
                typeDef: "<varchar, varchar>",
            },
            __v: {
                type: "int"
            },
            subType: {
                type: "varchar"
            },
            programDescription: {
                type: "varchar"
            },
            programExternalId: {
                type: "varchar"
            },
            programId: {
                type: "uuid"
            },
            programName: {
                type: "varchar"
            },
            parentSolutionId: {
                type: "uuid"
            },
            startDate: {
                type: "timestamp"
            },
            endDate: {
                type: "timestamp"
            },
            link: {
                type: "varchar"
            },
            creator: {
                type: "varchar"
            },
            minNoOfSubmissionsRequired: {
                type: "int",
                default: 1
            },
            //not defined as it required udt
            // *[license]* license
        }
        ,
        key: ["id"],
    },
    name: "solutions",
    db_type: "cassandra"
}