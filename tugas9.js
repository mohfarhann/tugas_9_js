const orang = {
    firstName: 'Muhammad',
    lastName: 'Farhan',
};

console.log(orang);

console.log('=================');
for (const p in orang) {
    console.log(p ,'=',orang[p]);
}