$(document).ready(function(){
	$("#create").click(function(){
		var title = $("#title").val();
		var category = $("#categories").val();
		var content = $("#content").val();
		var obj = {
			title: title,
			category: category,
			content: content	
		};
		var posts;
		if (localStorage.getItem("posts") == null){
			posts = [];
		}
		else {
			posts = JSON.parse(localStorage.getItem("posts"));
		}
		posts.push(obj);
		localStorage.setItem("posts", JSON.stringify(posts));
	});
});