var  courses = [
    {
        id: 212,
        name: 'khai',
        tuoi: 2
    },
    {
        id: 21222,
        name: 'khaipro',
        tuoi: 19
    },
    {
        id: 22,
        name: 'vitiminA',
        tuoi: 200
    },
    {
        id: 223,
        name: 'vitiminA',
        tuoi: 233
    },
    {
        id: 63,
        name: 'vitiminC',
        tuoi: 2322
    }
];


// var depthArray = [1,2,[3,4], 5,6,[7,8,9]];

// var flatArray = depthArray.reduce(function(flatoutput, depthItem) {
//     return flatoutput.concat(depthItem)
// },[])
// console.log(flatArray)

var topics = [
    {
        topic: 'font-end',
        courses: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'Javascript'
            }
        ]
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    },
];

var newCourse = topics.reduce(function(course, topic) {
    return course.concat(topic.courses)
}, []);


// console.log(newCourse)

var htmls = newCourse.map(function(course) {
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `;
});

console.log(htmls.join(''));

// var number = [2,19,200,233, 2322];
// var totalCoin = number.reduce(function(total, number){
//     return total + number;
// }, 0)

// console.log(totalCoin)

// var i =0;

// var totalCoin = courses.reduce(function(total, course) {
    
//     return total + course.tuoi;
// },0); // intial value
// console.log(totalCoin)