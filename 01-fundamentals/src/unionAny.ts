let value : string | number = "Hello";
value = 10;

let allow : 'allow' | 'deny' = 'allow'; //we can only assign 'allow' or 'deny' to allow data type

const orders = [100, 200, 300];

// if we give any keyword to the variable it can cause abnormal behavior so we use union type according to possibilities

let currentorder: string | number | undefined;

for (let order of orders){
    if(order == 28)
        currentorder = order;
 }


console.log(currentorder);