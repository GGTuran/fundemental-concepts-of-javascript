const mobile ={
    Brand :'GG',
    Price : '100k',
    Camera:'80mp'
}

for (const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}

// for of loop works for array
// for in loop works for object