const ctx = document.getElementById('salesChart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Penjualan',
            data: [15, 15, 15, 15, 15, 15, 15],
            backgroundColor: '#e2f4e5',
            borderRadius: 2,
            borderSkipped: false,
            barPercentage: 0.6,
            categoryPercentage: 0.7
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#8c8c8c',
                    font: {
                        size: 11
                    }
                }
            },
            y: {
                min: 0,
                max: 200,
                ticks: {
                    stepSize: 50,
                    color: '#8c8c8c',
                    font: {
                        size: 11
                    }
                },
                grid: {
                    color: '#f0f0f0'
                },
                border: {
                    dash: [0, 0]
                }
            }
        }
    }
});