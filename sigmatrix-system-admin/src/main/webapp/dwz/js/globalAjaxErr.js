$(function(){  
    // 设置jQuery Ajax全局的参数  
    $.ajaxSetup({
        error: function(jqXHR, textStatus, errorThrown){ 
            switch (jqXHR.status){  
	            case(400):
					alertMsg.error("请求出现语法错误！");
					break;
				case(401):
					alertMsg.error("访问被拒绝！");
					break;
				case(403):
					alertMsg.error("您没有权限访问此资源或进行此操作！");
					break;
				case(404):
					alertMsg.error("资源找不到！");
					break;
				case(405):
					alertMsg.error("请求方式对指定的资源不适用！");
					break;
				case(406):
					alertMsg.error("客户端浏览器不接受所请求页面的 MIME 类型！");
					break;
				case(407):
					alertMsg.error("客户必须先经过代理服务器的授权！");
					break;
				case(408):
					alertMsg.error("请求超时！");
					break;
				case(409):
					alertMsg.error("请求和资源的当前状态相冲突！");
					break;
				case(410):
					alertMsg.error("请求的资源已经失效！");
					break;
				case(411):
					alertMsg.error("服务器不能处理请求！");
					break;
				case(412):
					alertMsg.error("请求头中指定的一些前提条件失败！");
					break;
				case(413):
					alertMsg.error("目标文档的大小超过服务器当前愿意处理的大小！");
					break;
				case(414):
					alertMsg.error("请求URI太长！");
					break;
				case(415):
					alertMsg.error("不支持的媒体类型！");
					break;
				case(416):
					alertMsg.error("服务器不能满足客户在请求中指定的Range头！");
					break;
				case(417):
					alertMsg.error("执行失败！");
					break;
				case(423):
					alertMsg.error("锁定的错误！");
					break;
				case(500):
					alertMsg.error("内部服务器错误！");
					break;
				case(501):
					alertMsg.error("服务器不支持实现请求所需要的功能！");
					break;
				case(502):
					alertMsg.error("网关错误！");
					break;
				case(503):
					alertMsg.error("服务不可用！");
					break;
				case(504):
					alertMsg.error("网关超时！");
					break;
				case(505):
					alertMsg.error("服务器不支持请求中所指明的HTTP版本！");
					break;
				default:
					alertMsg.error("未知错误！");  
            }  
        },
        complete:function(XMLHttpRequest,textStatus){
        	/*
        	0：请求未初始化（还没有调用 open()）。
            1：请求已经建立，但是还没有发送（还没有调用 send()）。
            2：请求已发送，正在处理中（通常现在可以从响应中获取内容头）。
            3：请求在处理中；通常响应中已有部分数据可用了，但是服务器还没有完成响应的生成。
            4：响应已完成；您可以获取并使用服务器的响应了。
            */
        	if (XMLHttpRequest.readyState == 4) {
        		var status = XMLHttpRequest.status;
        		switch (status){
        			case(200):
        				var responseText = XMLHttpRequest.responseText;
	        			try{
	        				var jsonStr = JSON.parse(responseText);
	        				if(jsonStr.statusCode == 301){
	        					alertMsg.error(jsonStr.message, {okCall:function(){
	        						DWZ.loadLogin();
	        					}});
	        				}
	        			}catch(e){}
        				break;
        			case(400):
        				alertMsg.error("请求出现语法错误！");
        				break;
        			case(401):
        				alertMsg.error("访问被拒绝！");
        				break;
        			case(403):
        				alertMsg.error("您没有权限访问此资源或进行此操作！");
        				break;
        			case(404):
        				alertMsg.error("资源找不到！");
        				break;
        			case(405):
        				alertMsg.error("请求方式对指定的资源不适用！");
        				break;
        			case(406):
        				alertMsg.error("客户端浏览器不接受所请求页面的 MIME 类型！");
        				break;
        			case(407):
        				alertMsg.error("客户必须先经过代理服务器的授权！");
        				break;
        			case(408):
        				alertMsg.error("请求超时！");
        				break;
        			case(409):
        				alertMsg.error("请求和资源的当前状态相冲突！");
        				break;
        			case(410):
        				alertMsg.error("请求的资源已经失效！");
        				break;
        			case(411):
        				alertMsg.error("服务器不能处理请求！");
        				break;
        			case(412):
        				alertMsg.error("请求头中指定的一些前提条件失败！");
        				break;
        			case(413):
        				alertMsg.error("目标文档的大小超过服务器当前愿意处理的大小！");
        				break;
        			case(414):
        				alertMsg.error("请求URI太长！");
        				break;
        			case(415):
        				alertMsg.error("不支持的媒体类型！");
        				break;
        			case(416):
        				alertMsg.error("服务器不能满足客户在请求中指定的Range头！");
        				break;
        			case(417):
        				alertMsg.error("执行失败！");
        				break;
        			case(423):
        				alertMsg.error("锁定的错误！");
        				break;
        			case(500):
        				alertMsg.error("内部服务器错误！");
        				break;
        			case(501):
        				alertMsg.error("服务器不支持实现请求所需要的功能！");
        				break;
        			case(502):
        				alertMsg.error("网关错误！");
        				break;
        			case(503):
        				alertMsg.error("服务不可用！");
        				break;
        			case(504):
        				alertMsg.error("网关超时！");
        				break;
        			case(505):
        				alertMsg.error("服务器不支持请求中所指明的HTTP版本！");
        				break;
        			default:
        				alertMsg.error("未知错误！");
        		}
        	}
        }
    });  
});  