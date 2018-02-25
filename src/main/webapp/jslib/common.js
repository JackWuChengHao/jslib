/**
 * 
 */

	function hashmap(){
	
		var self = this,
		
		 hash = {},
		
		 keys = [],
		
		count = 0,
		
		 values = [];
	
		self.add = function(key,value){
			try{
				if( (typeof(key) === "string" && typeof(key) != "") || typeof(key) === "boolean" || typeof(key) === "number" ){
					hash[key] = values;
					count++
					if(keys.indexOf(key) === -1){
						keys.push(key);
					}
					if(values.indexOf(value) === -1){
						values.push(value);
					}
				}else{
					throw new exception("key is not primary type");	
				}
			}catch(e){
				console.log(e);
			}finally{
				return self;
			}
		}
	
	}
	
	$(document).ready(function () {
		var hash = new hashmap();
		hash = hash.add(1,2);
		console.log(hash);
		console.log("ok");
	});