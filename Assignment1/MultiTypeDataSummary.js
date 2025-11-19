console.log("===== Q2: Multi-Type Data Summary =====\n");

const name = "John Doe"; 
const age = 28; 
const isActive = true; 
const hobbies = ["Reading", "Coding", "Gaming"]; 
const userProfile = {
    country: "USA",
    joinDate: "2023-01-15"
};
const phoneNumber = null; 
let address; 

const dataSummary = [
    {
        Label: "Name",
        Value: name,
        Type: typeof name,
        IsArray: Array.isArray(name)
    },
    {
        Label: "Age",
        Value: age,
        Type: typeof age,
        IsArray: Array.isArray(age)
    },
    {
        Label: "Is Active",
        Value: isActive,
        Type: typeof isActive,
        IsArray: Array.isArray(isActive)
    },
    {
        Label: "Hobbies",
        Value: hobbies.join(", "),
        Type: typeof hobbies,
        IsArray: Array.isArray(hobbies)
    },
    {
        Label: "User Profile",
        Value: JSON.stringify(userProfile),
        Type: typeof userProfile,
        IsArray: Array.isArray(userProfile)
    },
    {
        Label: "Phone Number",
        Value: phoneNumber,
        Type: typeof phoneNumber,
        IsArray: Array.isArray(phoneNumber)
    },
    {
        Label: "Address",
        Value: address,
        Type: typeof address,
        IsArray: Array.isArray(address)
    }
];

console.log("Formatted Data Summary Report:");
console.table(dataSummary);

console.log("\n===== Type Analysis =====");
console.log(`String type check: typeof "${name}" = "${typeof name}"`);
console.log(`Number type check: typeof ${age} = "${typeof age}"`);
console.log(`Boolean type check: typeof ${isActive} = "${typeof isActive}"`);
console.log(`Array check: Array.isArray([${hobbies}]) = ${Array.isArray(hobbies)}`);
console.log(`Object check: Array.isArray({...}) = ${Array.isArray(userProfile)}`);
console.log(`Null type check: typeof null = "${typeof null}" (special case)`);
console.log(`Undefined type check: typeof address = "${typeof address}"`);
