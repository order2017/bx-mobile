require('./lrz');
exports.changeImage = function (ele, callback)
{
	var e = window.event || e;
	e.preventDefault();
	e.stopPropagation();

	var that = this;
	for(var n in ele.files[0])
	{
		console.log(n+'=>'+ele.files[0][n]);
	}
	console.log('finish');
	lrz(ele.files[0], {width: 1000, height: 1000}, function (results) {
		console.log('finish');
        //传送base64给服务端转存为图片。
        callback(results.base64);
	});
}


















