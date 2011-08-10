{
"dataset": {
    "name": "public_administration_contracts_for_portugal",
    "unique_keys": ["idAjusteDirecto"],     
    "label": "Public administration contracts for Portugal",
    "description": "Public administration contracts for Portugal",
    "currency": "EUR",
    "temporal_granularity": "year"
  },
  
"mapping": {
    
	"from": {
		"fields": [  
		{
		"column": "name_spender", 
		"name": "label", 
		"datatype": "string"
		}  		],
		"type": "entity",
		"description": "Pay from ",
		"label": "Payer"
			},
    
	"to": {
		"fields": [ 
		{
        "column": "name_receiver", 
        "datatype": "string", 
        "name": "label"} ],
		"type": "entity",
		"description": "Paid to",
		"label": "Receiver"
		},
	"amount": {
		"default_value": "",
		"description": "",
		"column": "price_amount_contract",
		"label": "",
		"datatype": "float",
		"type": "value"
		},
    "time": {
      "column": "date_contract",
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
	}
 }
 
     "section": {
      "fields": [
        {"column": "section", "datatype": "string", "name": "label"}
      ],
      "label": "Region",
      "type": "classifier",
      "description": "??????? ???????????",
      "taxonomy": "pt-budget:level:1"
    },
    "direction": {
      "fields": [
        {"column": "direction", "datatype": "string", "name": "label"}
      ],
      "label": "??????",
      "type": "classifier",
      "description": "??????? ???????????",
      "taxonomy": "pt-budget:level:2"
    },
    "program": {
      "fields": [
        {"column": "program", "datatype": "string", "name": "label"}
      ],
      "label": "????????",
      "type": "classifier",
      "description": "",
      "taxonomy": "pt-budget:level:3"
    },
    "type": {
      "fields": [
        {"column": "type", "datatype": "string", "name": "label" }
      ],
      "label": "??? ??????",
      "type": "classifier",
      "description": "",
      "taxonomy": "pt-budget:level:4"
    },
    "flow": {
      "column": "plusminus",
      "label": "Cash flow: income or expenditure",
      "type": "value",
      "description": ""
    },
  
  "views": [
    {
      "entity": "dataset",
      "label": "???????",
      "name": "default",
      "dimension": "dataset",
      "breakdown": "section",
      "filters": {"name": "pt-budget"},
      "view_filters": {"flow": "???????"}
    },
    {
      "entity": "classifier",
      "label": "??????? ???????????",
      "name": "default",
      "dimension": "section",
      "breakdown": "direction",
      "filters": {"taxonomy": "pt-budget:level:1" },
      "view_filters": {"flow": "???????"}
    },
    {
      "entity": "classifier",
      "label": "??????? ???????????",
      "name": "default",
      "dimension": "direction",
      "breakdown": "program",
      "filters": {"taxonomy": "pt-budget:level:2" },
      "view_filters": {"flow": "???????"}
    },
    {
      "entity": "classifier",
      "label": "?????? ? ???????????",
      "name": "default",
      "dimension": "program",
      "breakdown": "type",
      "filters": {"taxonomy": "pt-budget:level:3" },
      "view_filters": {"flow": "???????"}
    },    
    {
      "entity": "dataset",
      "label": "???????",
      "name": "expenditure",
      "dimension": "dataset",
      "breakdown": "direction",
      "filters": {"name": "pt-budget"},
      "view_filters": {"flow": "???????"}
    },
    {
      "entity": "classifier",
      "label": "??????? ???????????",
      "name": "expenditure",
      "dimension": "direction",
      "breakdown": "program",
      "filters": {"taxonomy": "pt-budget:level:2" },
      "view_filters": {"flow": "???????"}
    },
    {
      "entity": "classifier",
      "label": "?????? ? ???????????",
      "name": "expenditure",
      "dimension": "program",
      "breakdown": "type",
      "filters": {"taxonomy": "pt-budget:level:3" },
      "view_filters": {"flow": "???????"}
    }

  ]
}