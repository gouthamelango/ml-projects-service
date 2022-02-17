module.exports = {

    schema: {
        fields: {
            externalId:{
                type: "varchar",
                rule : {
                    required: true
                }
            },
            name:{
                type: "varchar",
                rule : {
                    required: true
                }
            },
            input : {
                type: "varchar",
                rule : {
                    required: true
                }
            },
            options: {
                type: "frozen",
                typeDef: "<options>"
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
            isVisible: {
                type: "boolean",
                default: true
            },
            status: {
                type: "varchar",
                default: "active"
            }
        },
        key: [["externalId"], "name"],
    },
    name: "project_attributes",
    db_type: "cassandra"
} 
