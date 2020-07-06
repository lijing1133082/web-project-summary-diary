Date.prototype.format = function(dateFormat) {
	if (!dateFormat) {
		dateFormat = 'yyyy-MM-dd hh:mm:ss';
	}

	var items = {
		"s+" : this.getSeconds(),  
		"m+" : this.getMinutes(),  
		"h+" : this.getHours(),  
		"d+" : this.getDate(),  
		"M+" : this.getMonth() + 1
	}

	if(/(y+)/.test(dateFormat)) {
		dateFormat = dateFormat.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)); 
	}

	for(var k in items) {
		if(new RegExp("("+ k +")").test(dateFormat)) {
			dateFormat = dateFormat.replace(RegExp.$1, RegExp.$1.length==1 ? items[k] : ("00"+ items[k]).substr((""+ items[k]).length)); 
		}
	}

	return dateFormat;
}

Date.prototype.increase = function(inc, dateFormat, level) {
	if (typeof inc === 'number') {
		switch (level) {
			case 'second':
				this.setSeconds(this.getSeconds() + inc);
				break;
			case 'minute':
				this.setMinutes(this.getMinutes() + inc);
				break;
			case 'hour':
				this.setHours(this.getHours() + inc);
				break;
			case 'date':
				this.setDate(this.getDate() + inc);
				break;
			case 'month':
				this.setMonth(this.getMonth() + inc);
				break;
			case 'year':
				this.setYear(this.getFullYear() + inc);
				break;
			default:
				console.warn('Invalid level');
		}
	} else {
		console.warn('Invalid data');
	}

	return this.format(dateFormat);
}

Date.prototype.addSeconds = function(seconds, dateFormat) {
	return this.increase(seconds, dateFormat, 'second');
}


Date.prototype.addMinutes = function(minutes, dateFormat) {
	return this.increase(minutes, dateFormat, 'minute');
}

Date.prototype.addHour = function(hours, dateFormat){
	return this.increase(hours, dateFormat, 'hour');
}

Date.prototype.addDay = function(days, dateFormat){
	return this.increase(days, dateFormat, 'date')
}

Date.prototype.addMonth = function (months,dateFormat) {
	return this.increase(months, dateFormat, 'month');
}

Date.prototype.addYear = function(years, dateFormat) {
	return this.increase(years, dateFormat, 'year');
}
