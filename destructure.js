const person = { name: 'Salman Khan', age:'55', phone:'0124587425', gfName: 'katrina', address:'galaxy', friendName:['sharuk khan','amir khan','shakib khan']};
const { name,gfName,salary }= person;
console.log( name, gfName,salary);



const friend = ['shuvo','kafiul','islam','nahid'];
const[ firstFrnd, nextfrnd,...last]=friend;
console.log(firstFrnd,...last);


const complexObject={
    name:'laka',
    info: {
        address: 'dhubalhati',
        leader: 'kalachand'
    }
}

const { leader } = complexObject.info;
console.log(leader);