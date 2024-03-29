##DWConditions.js

DWConditions is used when you need to trigger a callback when several things have completed. For example, if you need to handle updating the interface only when several ajax calls have completed.

Just give it a set of strings for names of conditions. When a condition has been met, call dwconditions.conditionMet.

Does not depend on any other libraries.

Example:

	<script src="js/dwconditions.js" type="text/javascript"></script>
	        
	    ...

	    function doSomething()
	    {
	        alert("Success!");
	    }

	    dwconditions.addConditional("conditionA", "conditionB", "conditionC", doSomething);

	    dwconditions.conditionMet("conditionA");
	    dwconditions.conditionMet("conditionB");
	    dwconditions.conditionMet("conditionC");		// doSomething() will fire now.

This is licensed under the GNU GPL. See the [license](license.txt)