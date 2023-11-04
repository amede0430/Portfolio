const btn1 = document.querySelector(".btn1"),
    btn2 = document.querySelector(".btn2"),
    menu = document.querySelectorAll(".nav-item");


btn1.addEventListener('click', function() {
    btn1.classList.remove('i-present');
    btn1.classList.add('i-absent');
    btn2.classList.remove('i-absent');
    btn2.classList.add('i-present');
});


btn2.addEventListener('click', function() {
    btn2.classList.remove('i-present');
    btn2.classList.add('i-absent');
    btn1.classList.remove('i-absent');
    btn1.classList.add('i-present');
});

var ctx = document.getElementById('myPieChart').getContext('2d');
var data = {
    color: 'white',
    labels: ['Designer: \n UI design \n UX design \n Design Systems', '<Coder/> \n Front-end development \n Back-end development \n HTML/CSS \n JS \n Python \n C/C++ \n Php'],
    datasets: [{
        data: [40, 60],
        backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)'
        ]
    }]
}
var options = {
    title: {
        display: true,
        text: 'Statisques de maitrise des différents domaines'
    },
    legend: {
        position: 'bottom'
    }
};

var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});