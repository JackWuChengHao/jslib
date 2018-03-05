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
	},

	self.each = function(){
		for(i in keys){
			console.log(hash[keys[i]]);
		}
		return self;
	},

	self.remove = function(key){
		try{
			
			if( (typeof(key) === "string" && typeof(key) != "") || typeof(key) === "boolean" || typeof(key) === "number" ){

				var value = hash[key];

				count--;

				for( key_item in keys){
					if(key_item === key)
					{
						delete hash[key];
					}
				}

				var key_index = keys.indexOf(key) ;

				var value_index = values.indexOf(value);

				keys = keys[0,key_index].concat(keys[key_index+1]);

				values = values[0,value_index].concat(values[value_index+1]);

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
	var hash1 = new hashmap();
	hash1 = hash1.add(1,2);
	hash1.remove(1);
	hash1.each();
});