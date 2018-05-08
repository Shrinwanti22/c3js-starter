$(function() {
	var line = [
		['data1', 30, 200, 100, 400, 150, 250],
		['data2', 50, 20, 10, 40, 15, 25]
	];
	var bar = [
		['data1', 30, 200, 100, 400, 150, 250],
		['data2', 130, 100, 140, 200, 150, 50]
	];
	var barOptions = {
		bar: {
			width: {
				ratio: 0.5
			}
		}
	};
	function plot(target, type, data, options) {
		var chart = c3.generate({
			bindto: target,
			data: {
				columns: data,
				type: type
			}
		});
		/*setTimeout(function () {
			chart.load({
				columns: [
					['data3', 130, -150, 200, 300, -200, 100]
				]
			});
		}, 1000);*/
	};
	plot("#linechart", "line", line);
	plot("#barchart", "bar", bar, barOptions);
});
