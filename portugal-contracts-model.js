{
"dataset": {
    "name": "pt-contract",
    "unique_keys": ["idAjusteDirecto"],     
    "label": "Public administration contracts for Portugal",
    "description": "Public administration contracts for Portugal namely the contracts signed directly without tenders, namely as they are published in http://www.base.gov.pt",
    "currency": "EUR",
    "temporal_granularity": "year"
  	},
  
"mapping": {
	"from": {
		"type": "entity",
		"fields": [  
		{"column": "CIF_spender", "name": "name", "datatype": "id"}, 
		{ "column": "name_spender", "datatype": "string", "name": "label"},
		{ "constant": "true", "datatype": "constant", "name": "Public Administration Entity"}
		],
		"description": "Pay from",
		"label": "Spender"
		},
   
	"to": {
		"type": "entity",
		"fields": [ 
		{ "column": "CIF_receiver",  "name": "name", "datatype": "id"}, 
		{ "column": "name_receiver", "datatype": "string", "name": "label"},
		{ "constant": "true", "datatype": "constant", "name": "recipient-public-spending"}
		],
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
      		"description": "Data do Contrato",
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
      		"taxonomy": "pt-contract:level:1"
    		},
    
    	"ap2": {
      		"fields": [   {"column": "type_spender2", "datatype": "string", "name": "label" }  ],
      		"label": "Tipo de Instituição",
      		"type": "classifier",
      		"description": "Tipo de Instituição",
      		"taxonomy": "pt-contract:level:2"
    		},
    
    	"ap3": {
      		"fields": [ { "column": "name_spender", "datatype": "string", "name": "label"}  ],
      		"label": "Instituição Pública",
      		"type": "classifier",
      		"description": "Nome da Instituição",
      		"taxonomy": "pt-contract:level:3"
    		},

    	"nut1": {
      		"fields": [  { "column": "region1", "datatype": "string", "name": "label"}   ],
      		"label": "Region NUT1",
      		"type": "classifier",
      		"description": "NUT1",
      		"taxonomy": "pt-contract:level:4"
    		},

    	"nut2": {    
    		"fields": [    {"column": "region2", "datatype": "string", "name": "label"}    ],
      		"label": "Region NUT2",
      		"type": "classifier",
      		"description": "NUT2",
      		"taxonomy": "pt-contract:level:5"
    		},
    
	"nut3": {    "fields": [  {"column": "region3", "datatype": "string", "name": "label"}    ],
	      	"label": "Region NUT3",
      		"type": "classifier",
      		"description": "NUT3",
      		"taxonomy": "pt-contract:level:6"
    		}

 }, 
  "views": [
    {
      "entity": "dataset",
      "label": "Contracts by entity type",
      "name": "default",
      "dimension": "dataset",
      "breakdown": "ap1",
      "filters": {"name": "pt-contract"}
    },

    {
      "entity": "classifier",
      "label": "Contracts by type of institution",
      "name": "default",
      "dimension": "ap1",
      "breakdown": "ap2",
      "filters": {"taxonomy": "pt-contract:level:1" }
    },
    {
      "entity": "classifier",
      "label": "Contracts by institution",
      "name": "default",
      "dimension": "ap2",
      "breakdown": "ap3",
      "filters": {"taxonomy": "pt-contract:level:2" }
    },
    {
      "entity": "entity",
      "label": "Entities of Contract",
      "name": "default",
      "dimension": "ap3",
      "breakdown": "to",
      "filters": {"taxonomy": "pt-contract:level:3" }
    },    
    {
      "entity": "dataset",
      "label": "Contracts by Region",
      "name": "regional",
      "dimension": "dataset",
      "breakdown": "nut1",
      "filters": {"name": "pt-contract"}
    },
      {
      "entity": "classifier",
      "label": "Contracts by Nut2",
      "name": "regional",
      "dimension": "nut1",
      "breakdown": "nut2",
      "filters": {"taxonomy": "pt-contract:level:4" }
    },
    {
      "entity": "classifier",
      "label": "Contracts by NUT3",
      "name": "regional",
      "dimension": "nut2",
      "breakdown": "nut3",
      "filters": {"taxonomy": "pt-contract:level:5" }
    },
    {
      "entity": "entity",
      "label": "where some company gets payed",
      "name": "regional",
      "dimension": "nut3",
      "breakdown": "to",
      "filters": {"taxonomy": "pt-contract:level:6" }
    }
  ]

}
