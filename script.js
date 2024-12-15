const makeChange = (c) => {
  // your name here
	const obj={
		q:0,
		d:0,
		n:0,
		p:0
	};
	while(c){
		if(c>=25){
			obj.q++;
			c-=25;
		}else if(c<25 && c>=10){
			obj.d++;
			c-=10;
		}else if(c<10 && c>=5){
			obj.n++;
			c-=5;
		}else{
			obj.p++;
			c-=1;
		}
	}
	return obj;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
