$(document).ready(function(){
        $.ajax({
            //提交数据的类型 POST GET
            type:"POST",
            //提交的网址
            url:"http://47.95.224.248/BlogCounter/counterget.php",
            //提交的数据
            data:{title:"{{ post.title }}",url:"{{ post.url }}"},
            //返回数据的格式
            datatype: "html",//"xml", "html", "script", "json", "jsonp", "text".

            success:function(data){
                //更新浏览数
                $("#msg").html(data);
            },
            //调用出错执行的函数
            error: function(){
                //请求出错处理
            }
        });
});
