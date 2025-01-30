
const matrix =
    [[4,7,1,3,5],
    [2,0,6,9,7],
    [3,1,2,6,4]]
    
function clickMe(){
    console.log('Hola Mundo');
}

function printTransformedMatrix(){
    let counter =0
    let newMatrix=[]
    let newRow =[]
    
    do{

        matrix.forEach((item)=>{
            newRow.push(item[counter])
        })

        newMatrix.push(newRow.toString())
        newRow=[]

        counter++

    }while (counter < matrix[0].length)
        
    console.log('Vieja matriz:');
    matrix.forEach((item)=>{
        console.log("Renglon: ", item.toString());
    })

    console.log('Nueva matriz:');
    newMatrix.forEach((item)=>{
        console.log("Renglon: ", item);
    })

}

