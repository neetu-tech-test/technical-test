function add(){
    let firstG = null, secondG = null;
    return (first =0, second=0) => {
        if(!firstG){
            firstG = first;
            secondG = second;
        }
        return firstG + secondG;
    }    
}
// const addFunc = add();
// console.log('addFunc(2, 4)', addFunc(2, 4));
// console.log('addFunc(21, 4)', addFunc(21, 4));

const AddOnceFunc = () =>{
    const addFunc = add();
    return (<div>Once function
        <p>addFunc(2, 4) = {addFunc(2, 4)}</p>
        <p>addFunc(21, 4) = {addFunc(21, 4)}</p>
    </div>)
}

export default AddOnceFunc;