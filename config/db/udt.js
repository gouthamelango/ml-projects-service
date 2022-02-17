module.exports = {


    categories: {
    _id :"uuid",
    externalId: "varchar",
    name: "varchar"
    },

    learning_resources:{
        name :"varchar",
        Id :"varchar",
        app :"varchar",
        link :"varchar",  
        isChecked :"boolean",
    }, 

    meta_information:{
        rationale :"varchar",
        primaryAudience :"list<varchar>",
        Goals :"varchar",
        duration: "varchar",
        successIndicators: "varchar",
        risks :"varchar",
        approaches: "varchar",
    },

    visibleif:{       
            id: "uuid",
            operator: "varchar",
            value: "varchar",
    },

    recommendedFor:{
        roleId: "uuid",
        code :"varchar"
        
    },

    options:{
        value :"varchar",
        label: "varchar"
    },


}