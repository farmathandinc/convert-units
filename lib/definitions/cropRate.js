var metric
  , imperial;

  // TODO: bu how to do bushels?  (need to pass in the per-crop BU to MT conversion rate)
metric = {
	'kg/ha': {
		name: {
			singular: 'Kilogram per hectare'
			, plural: 'Kilograms per hectare'
		}
		, to_anchor: 1
	},
	'g/ha': {
		name: {
			singular: 'Gram per hectare'
			, plural: 'Grams per hectare'
		}
		, to_anchor: 1/1000
	},
	'mt/ha': {
		name: {
			singular: 'Metric tonne per hectare'
			, plural: 'Metric tonnes per hectare'
		}
		, to_anchor: 1000
	}, 
	'lb/ha': {
		name: {
			singular: 'Pound per hectare'
			, plural: 'Pounds per hectare'
		}
		, to_anchor: 1/2.20462
	}, 
	'lbs/ha': {
		name: {
			singular: 'Pound per hectare'
			, plural: 'Pounds per hectare'
		}
		, to_anchor: 1/2.20462
	}, 
	'bags/ha': {
		name: {
			singular: 'Bags per hectare'
			, plural: 'Bags per hectare'
		}
		, to_anchor: 1
	}, 
	/* These were moved to seedRate.js -- they cannot be in both
	'1,000 seeds/ha': {
		name: {
			singular: 'Thousand seeds per hectare'
			, plural: 'Thousands of seeds per hectare'
		}
		, to_anchor: 1
	}, 
	'10,000 seeds/ha': {
		name: {
			singular: 'Ten thousand seeds per hectare'
			, plural: 'Tens of thousands of seeds per hectare'
		}
		, to_anchor: 1
	}, 
	*/
};

imperial = {
	'lb/ac': {
		name: {
			singular: 'Pound per acre'
			, plural: 'Pounds per acre'
		}
		, to_anchor: 1
	}, 
	'lbs/ac': {
		name: {
			singular: 'Pound per acre'
			, plural: 'Pounds per acre'
		}
		, to_anchor: 1
	}, 
	'kg/ac': {
		name: {
			singular: 'Kilogram per acre'
			, plural: 'Kilograms per acre'
		}
		, to_anchor: 2.20462
	},
	'g/ac': {
		name: {
			singular: 'Gram per acre'
			, plural: 'Grams per acre'
		}
		, to_anchor: 0.00220462262185
	},
	'mt/ac': {
		name: {
			singular: 'Metric tonne per acre'
			, plural: 'Metric tonne per acre'
		}
		, to_anchor: 2204.62
	},
	'bags/ac': {
		name: {
			singular: 'Bag per acre'
			, plural: 'Bags per acre'
		}
		, to_anchor: 1
	}, 
	/* These were moved to seedRate.js -- they cannot be in both
	'seeds/ac': {
		name: {
			singular: 'Seeds per acre'
			, plural: 'Seeds per acre'
		}
		, to_anchor: 1  // can't convert to/from lb/ac
	}, 
	'1,000 seeds/ac': {
		name: {
			singular: 'Thousand seeds per acre'
			, plural: 'Thousands of seeds per acre'
		}
		, to_anchor: 1 // can't convert to/from lb/ac
	}, 
	'10,000 seeds/ac': {
		name: {
			singular: 'Ten thousand seeds per acre'
			, plural: 'Tens of thousands of seeds per acre'
		}
		, to_anchor: 1 // can't convert to/from lb/ac
	}, 
	*/
};

module.exports = {
	metric: metric
	, imperial: imperial
	, _anchors: {
		metric: {
			unit: 'kg/ha'
			, ratio: 1/1.12085
		}
		, imperial: {
			unit: 'lb/ac'
			, ratio: 1.12085
		}
	}
};
