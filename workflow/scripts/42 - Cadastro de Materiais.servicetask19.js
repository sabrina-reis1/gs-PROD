function servicetask19(attempt, message) 
{
	var form = hAPI.getCardData(getValue('WKNumProces'));
	
	var tableSize = (form.toString().match(/tabledetailname1___/g) || []).length; // pega a quantidade de fihos do form.

	for (var i = 1; i <= tableSize; i++) 
	{
		
		
	}

}