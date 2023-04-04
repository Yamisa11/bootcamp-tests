function isWeekday(day){
	 if (day.startsWith("M") || day.startsWith("T") || day.startsWith("W") ||day.startsWith("T")||day.startsWith("F") && day.endsWith("day")) {
		return true;
	 } else{ return false}
}

