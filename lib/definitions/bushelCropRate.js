var metric
  , imperial;

metric = {
  'bu/ha': {
    name: {
      singular: 'Metric tonne per hectare'
    , plural: 'Metric tonnes per hectare'
    }
  , to_anchor: 1
	}, 
	'bu/case': {
                name: {
                        singular: 'Bushel per case'
                        , plural: 'Bushels per case'
                }
                , to_anchor: 1
        },
        'bu/bag': {
                name: {
                        singular: 'Bushel per bag'
                        , plural: 'Bushels per bag'
                }
                , to_anchor: 1
        },
};

imperial = {
	'bu/ac': {
    name: {
      singular: 'bushels tonne per acre'
    , plural: 'bushels tonne per acre'
    }
  , to_anchor: 1
	},
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'bu/ha'
    , ratio: 0.404686
    }
  , imperial: {
      unit: 'bu/ac'
    , ratio: 1/0.404686
    }
  }
};
