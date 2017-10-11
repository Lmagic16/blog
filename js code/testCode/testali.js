var data = [
	{
		id:"1",
		value:"haha",
		children:[
			{
				id:"1-1",
				value:"ok",
				children:[
					{
						id:"1-1-1",
						value:"yes",
						children:[
							{
								id:"1-1-1-1",
								value:"hao",
								children:[],
							}
						]
					}
				]
			},
			{
				id:"1-2",
				value:"ok",
				children:[
					{
						id:"1-2-1",
						value:"yes",
						children:[
							{
								id:"1-2-1-1",
								value:"hao",
								children:[],
							}
						]
					},
					{
						id:"1-2-2",
						value:"yes",
						children:[
							{
								id:"1-2-2-1",
								value:"hao",
								children:[],
							},
							{
								id:"1-2-2-2",
								value:"hao",
								children:[],
							}
						]
					}
				]
			}
		]
	},
	{
		id:"2",
		value:"hao",
		children:[],
	}
];

function transform(data){
	transformData(data);
	return data;
}
function transformData(data){
	if(data.length > 0){
		for(var i=0;i<data.length;i++){
			if(data[i].children.length > 0){
				data[i]["add"] = data[i].children[0].id;
				transformData(data[i].children);
			}
		}
	}
}
console.log(transform(data));