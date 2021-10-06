let array = [-1,0,1,-2,2,1];
let tripletArray = new Array();
for (let index1 = 0; index1 < array.length - 2; index1++) 
{
    for (let index2 = index1 + 1; index2 < array.length - 1; index2++) 
    {
        for (let index3 = index2 + 1; index3 < array.length; index3++) 
        {
            if(array[index1]+array[index2]+array[index3]==0)
            {
                tripletArray.push([array[index1],array[index2],array[index3]])
            }
            
        }
    }
}
if(tripletArray.length!=0)
    console.log(tripletArray)
else
    console.log("no triplet found")
