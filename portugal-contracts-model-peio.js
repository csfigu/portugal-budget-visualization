{
"dataset": {
    "name": "pt-budget",
    "unique_keys": ["idAjusteDirecto"],     
    "label": "Public administration contracts for Portugal",
    "description": "Portugal Public Admin",
    "currency": "EUR",
    "temporal_granularity": "year"
  },
  
"mapping": {
	"from": {
		"fields": [  {"constant": "EU", "name": "label", "datatype": "constant"} ],
		"type": "entity",
		"description": "Pay from ",
		"label": "Payer"
	},
   
	"to": {
		"fields": [ {"constant": "Portuguese Society", "name": "label", "datatype": "constant"} ],
		"type": "entity",
		"description": "Paid to",
		"label": "Receiver"
	},
		
		
	"amount": {
      "default_value": "",
      "description": "",
      "column": "precoContratual",
      "label": "",
      "datatype": "float",
      "type": "value"
    },
    
    "time": {
      "column": "dataCelebracaoContrato",
      "type": "value",
      "label": "year",
      "description": "",
      "datatype": "date"
	},
    
    "idAjusteDirecto": { 
      "default_value": "",
      "description": "",
      "column": "idAjusteDirecto",
      "label": "",
      "datatype": "string",
      "type": "value"
	},

	"contract_description": { 
      "default_value": "",
      "description": "",
      "column": "contract_description",
      "label": "Contract Description",
      "datatype": "string",
      "type": "value"
	},
 
    "ap1": {
      "fields": [  { "column": "type_spender", "datatype": "string", "name": "label"}    ],
      "label": "Administração Pública",
      "type": "classifier",
      "description": "Administração Pública",
      "taxonomy": "pt-budget:level:1"
    },
    
    "ap2": {
      "fields": [   {"column": "type_spender2", "datatype": "string", "name": "label" }  ],
      "label": "Tipo de Instituição",
      "type": "classifier",
      "description": "Tipo de Instituição",
      "taxonomy": "pt-budget:level:2"
    },
    
    "ap3": {
      "fields": [ { "column": "name_spender", "datatype": "string", "name": "label"} ,
			      { "column": "CIF_spender", "datatype": "string", "name": "label"}    ],
      "label": "Instituição Pública",
      "type": "classifier",
      "description": "Nome da Instituição",
      "taxonomy": "pt-budget:level:3"
    },

    "nut1": {
      "fields": [  { "column": "region1", "datatype": "string", "name": "label"}   ],
      "label": "Region NUT1",
      "type": "classifier",
      "description": "NUT1",
      "taxonomy": "pt-region:level:1"
    },

    "nut2": {    
    "fields": [    {"column": "region2", "datatype": "string", "name": "label"}    ],
      "label": "Region NUT2",
      "type": "classifier",
      "description": "NUT2",
      "taxonomy": "pt-region:level:2"
    },
    
    "nut3": {    "fields": [  {"column": "region3", "datatype": "string", "name": "label"}    ],
      "label": "Region NUT3",
      "type": "classifier",
      "description": "NUT3",
      "taxonomy": "pt-region:level:3"
    }
},
  
  "views": [
    {
      "entity": "dataset",
      "label": "Contratos por tipo de instituição",
      "name": "default",
      "dimension": "dataset",
      "breakdown": "ap2",
      "filters": {"name": "pt-budget"}
    },
    {
      "entity": "classifier",
      "label": "Contratos por instituição",
      "name": "default",
      "dimension": "ap2",
      "breakdown": "ap3",
      "filters": {"taxonomy": "pt-budget:level:2" }
    },
   
    {
      "entity": "dataset",
      "label": "Regional spending",
      "name": "regional",
      "dimension": "dataset",
      "breakdown": "nut2",
      "filters": {"name": "pt-budget"}
    },
    {
      "entity": "classifier",
      "label": "Contratos por NUT3",
      "name": "region",
      "dimension": "nut2",
      "breakdown": "nut3",
      "filters": {"taxonomy": "pt-region:level:2" }
    }
  ]
}

