{
"dataset": {
    "name": "pt-contract",
    "unique_keys": ["idAjusteDirecto"],     
    "label": "Public administration contracts for Portugal",
    "description": "Public administration contracts for Portugal",
    "currency": "EUR",
    "temporal_granularity": "year"
  },
  
"mapping": {
	"from": {
		"fields": [  {"column": "CIF_spender", "name": "label", "datatype": "string"} ],
		"type": "entity",
		"description": "Pay from",
		"label": "Payer"
	},
   
	"to": {
		"fields": [ { "column": "CIF_receiver",  "name": "label", "datatype": "string"} ],
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
      "label": "Contratos por ajuste directo",
      "name": "default",
      "dimension": "dataset",
      "breakdown": "ap1",
      "filters": {"name": "pt-contract"}
    },

    {
      "entity": "classifier",
      "label": "Contratos por tipo de instituição",
      "name": "default",
      "dimension": "ap1",
      "breakdown": "ap2",
      "filters": {"taxonomy": "pt-contract:level:1" }
    },
    {
      "entity": "classifier",
      "label": "Contratos por instituição",
      "name": "default",
      "dimension": "ap2",
      "breakdown": "ap3",
      "filters": {"taxonomy": "pt-contract:level:2" }
    },
    {
      "entity": "classifier",
      "label": "Partes do Contrato",
      "name": "default",
      "dimension": "ap3",
      "breakdown": "name_receiver",
      "filters": {"taxonomy": "pt-budget:level:3" }
    },    
    {
      "entity": "dataset",
      "label": "Contratos por Ajuste Directo",
      "name": "regional",
      "dimension": "dataset",
      "breakdown": "nut1",
      "filters": {"name": "pt-contract"}
    },
      {
      "entity": "classifier",
      "label": "Contratos por Região",
      "name": "regional",
      "dimension": "nut1",
      "breakdown": "nut2",
      "filters": {"taxonomy": "pt-region:level:1" }
    },
    {
      "entity": "classifier",
      "label": "Contratos por NUT3",
      "name": "regional",
      "dimension": "nut2",
      "breakdown": "nut3",
      "filters": {"taxonomy": "pt-region:level:2" }
    },
    {
      "entity": "classifier",
      "label": "Onde se paga a alguém",
      "name": "regional",
      "dimension": "nut3",
      "breakdown": "name_receiver",
      "filters": {"taxonomy": "pt-region:level:3" }
    }
  ]

}
