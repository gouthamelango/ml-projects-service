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

    recommended_for:{
        roleId: "uuid",
        code :"varchar"
        
    },

    options:{
        value :"varchar",
        label: "varchar"
    },
    evidence_solution:{   
    externalId :"varchar",
    Tip :"varchar",
    Name : "varchar",
    Description :"varchar",
    modeOfCollection :"varchar",
    canBeNotApplicable: "boolean",
    notApplicable: "boolean",
    canBeNotAllowed :"boolean",
    Remarks : "varchar"

    },

   scope_solution :{
    entities: "set<uuid>",
    entityType: "varchar",
    entityTypeId: "uuid",
    //not able to create roles 
    // Roles :"list <map <varchar, text>>"


   },

   payload :{
    question : "list<text>",
    labels :"list<text>",
    responseType :"varchar",
    filesNotUploaded :"list<text>"

   },

   visible_if:{
       id: "uuid",
       operator: "varchar",
       value: "varchar"
   }


}