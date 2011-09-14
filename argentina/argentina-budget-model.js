{
	"dataset": {
		"name": "ar-budget-2011",
		"unique_keys": ["id_unique"],     
		"label": "Argentina Government Budget 2011",
		"description": "Government Budget for 2011 in Argentina",
		"currency": "ARS",
		"temporal_granularity": "year"
  	},
	
	"mapping": {
		"from": {
			"fields": [  {"constant": "Argentina State", "name": "label", "datatype": "constant"} ],
			"type": "entity",
			"description": "Pay from ",
			"label": "Payer"
		},
		
		"to": {
			"fields": [ {"constant": "Argentina Society", "name": "label", "datatype": "constant"} ],
			"type": "entity",
			"description": "Paid to",
			"label": "Receiver"
		},
		"amount": {
			"default_value": "",
			"description": "",
			"column": "presupuesto",
			"label": "",
			"datatype": "float",
			"type": "value"
		},
		
    	"time": {
      		"column": "date",
      		"type": "value",
      		"label": "year",
      		"description": "Date of Budget",
      		"datatype": "date"
		},
    
    	"id_unique": { 
      		"default_value": "",
      		"description": "",
    		"column": "id_unique",
			"label": "",
      		"datatype": "string",
      		"type": "value"
		},
	
		"desc_programa": { 
      		"default_value": "",
      		"description": "",
      		"column": "desc_programa",
      		"label": "Spending Description",
      		"datatype": "string",
      		"type": "value"
		},
		
    	"ap1": {
      		"fields": [  { "column": "desc_finalidad", "datatype": "string", "name": "label"}    ],
      		"label": "Administration Level 1",
      		"type": "classifier",
      		"description": "Administration level 1",
      		"taxonomy": "ar-budget:level:1"
    	},
		
    	"ap2": {
      		"fields": [   {"column": "desc_funcion", "datatype": "string", "name": "label" }  ],
      		"label": "Administration level 2",
      		"type": "classifier",
      		"description": "Administration level 2",
      		"taxonomy": "ar-budget:level:2"
    	},
		
    	"ap3": {
      		"fields": [ { "column": "name_spender", "datatype": "string", "name": "label"}  ],
      		"label": "Administration level 3",
      		"type": "classifier",
      		"description": "Administration level 3",
      		"taxonomy": "ar-budget:level:3"
    	}
	},
	"views": [
		{
			"entity": "dataset",
			"label": "Contracts by entity type",
			"name": "default",
			"dimension": "dataset",
			"breakdown": "ap1",
			"filters": {"name": "ar-budget"}
		},
		
		{
			"entity": "classifier",
			"label": "Contracts by type of institution",
			"name": "default",
			"dimension": "ap1",
			"breakdown": "ap2",
			"filters": {"taxonomy": "ar-budget:level:1" }
		},
		{
			"entity": "classifier",
			"label": "Contracts by institution",
			"name": "default",
			"dimension": "ap2",
			"breakdown": "ap3",
			"filters": {"taxonomy": "ar-budget:level:2" }
		},
		{
			"entity": "entity",
			"label": "Entities of Contract",
			"name": "default",
			"dimension": "ap3",
			"breakdown": "to",
			"filters": {"taxonomy": "ar-budget:level:3" }
		}
   
	]

}