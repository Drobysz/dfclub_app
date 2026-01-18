export function convertTime(nbMin: number) {
	const hours = Math.round(nbMin / 60);
	const mins = nbMin % 60;

	const isHours = nbMin >= 60;
	const isMins = mins != 0;

	let res = '';
	if (isHours)
		res += `${hours}ч`;
	if (isHours && isMins)
		res += ' ';
	if (isMins)
		res += `${mins}мин`;
	return res;
}