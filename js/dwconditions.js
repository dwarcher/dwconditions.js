var dwconditions = {
	metConditions: [],		// array of strings of conditions that have been met
	conditionsSets: [],
	// Sets up callbacks.
	arrayContains: function(a, obj) {
	    for (var i = 0; i < a.length; i++) {
	        if (a[i] === obj) {
	            return true;
	        }
	    }
	    return false;
	},
	init: function()
	{
		conditionsSets = new Array();
		metConditions = new Array();
	},
	conditionMet: function(szName)
	{
		metConditions.push(szName);

		//console.log(szName);

		// check to see if any new events should fire.
		for(var i=0; i<conditionsSets.length; i++)
		{
			var met = 0;
			var conditions = conditionsSets[i].conditions;

			// IDEA: we could also implement things like '!cond' etc

			for(var j=0; j<conditions.length; j++)
			{
				if(this.arrayContains(metConditions, conditions[j]))
				{
					met++;

					if(met == conditions.length)
						conditionsSets[i].callback();
				}
			}
		}
	},
	addConditional: function()
	{
		var condArr = [];
		var cb = null;		
		for(var i=0; i<arguments.length; i++)
		{
			if(typeof arguments[i] == "string")
			{
				condArr.push(arguments[i]);
			}
			if(typeof arguments[i] == "function")
			{
				cb = arguments[i];
			}
		}

		conditionsSets.push( { conditions: condArr, callback: cb } );
	}
};

dwconditions.init();