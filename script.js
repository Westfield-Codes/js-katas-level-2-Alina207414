var studentFlavors = []

function askFlavor() {
let name = prompt("what your name?");
let flavor = prompt("What your favorite flavor?");
let pair = [name,flavor];
return pair;
}

function main(){
    studentFlavors.push(askFlavor());
    if (confirm("more")) studentFlavors.push(askFlavor());
    alert(studentFlavors.toString());
    let name = prompt("Which student?");
}

function goodName(test) {
    for (let name = 0; name < studentFlavors.length;name++) {
        if (studentFlavors[name][0] == test);
            return true;

    }
}