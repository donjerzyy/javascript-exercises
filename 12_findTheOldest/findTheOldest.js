

const findTheOldest = function(arr) {

    let oldestName = {name:""}
    let oldest = 0

    for (let i= 0; i<arr.length; i++) {

        if(arr[i].yearOfDeath === undefined) {
            let d = new Date();
            let age = d.getFullYear() - arr[i].yearOfBirth;
            if(age> oldest) {
                oldest = age;
                oldestName.name = arr[i].name;
            }

        } else {
            let age = arr[i].yearOfDeath - arr[i].yearOfBirth;
            if(age> oldest) {
                oldest = age;
                oldestName.name = arr[i].name;
            }
        }


    }

    return oldestName;



};

// Do not edit below this line
module.exports = findTheOldest;
