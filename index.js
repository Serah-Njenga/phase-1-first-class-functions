function receivesAFunction(spy) {
    return spy()
}
receivesAFunction();
function returnsANamedFunction() {
    return function Ella() {
    }
}

function returnsAnAnonymousFunction() {
    return ()=>{

    }

}
returnsAnAnonymousFunction()