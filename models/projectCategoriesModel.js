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
            },
            icon: {
                type: "varchar",
                default: ""
            },
            noOfProjects: {
                type: "int",
                default: 0
            }
        },
        key: [["externalId"], "name"],
    },
    name: "project_categories",
    db_type: "cassandra"
} 
