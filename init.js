window.onload = function(){
	var initlist = [
	    "../jquery-3.1.1.min.js",
		"../swiper.jquery.min.js",
		"../index.js",
		"../pub.js",
		"../exg.js",
		"../contact.js"
	];//需要加载的列表，这里可以多配置几个，根据不同需求加载不同的列表

	var loadjs = (key) => new Promise((resolve, reject) =>{
	    var script = document.createElement('script');;
	    script.src = key ;//+'?r=' + Math.random() * 9999
	    script.onload = ()=>{
	        resolve();
	    };
	    document.getElementsByTagName("head")[0].appendChild(script);
	});

	//es6语法
	function initMain(jsFiles,func){
	    var tasks = [];
	    initlist = initlist.concat(jsFiles);
	    for(var init_key in initlist){
            tasks.push(loadjs(initlist[init_key]));
        }
	    Promise.all(tasks).then(()=>{
	        func();
	    });
	}

	// es7语法，浏览器兼容不是太好，慎用
	async function initMain(jsFiles,func){
	    initlist = initlist.concat(jsFiles);
	    for(var init_key in initlist){
	        await loadjs(initlist[init_key]);
	    }
	    await func();
	}
}