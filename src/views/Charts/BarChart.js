import { Bar } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const ChartjsBarChart = ({
  tooltipShadow,
  gridLineColor,
  labelColor,
  successColorShade,
  successColorShade2
}) => {
  const options = {
      elements: {
        rectangle: {
          borderWidth: 2,
          borderSkipped: 'bottom'
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        display: false
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: tooltipShadow,
        backgroundColor: '#fff',
        titleFontColor: '#000',
        bodyFontColor: '#000'
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: true,
              color: gridLineColor,
              zeroLineColor: gridLineColor
            },
            scaleLabel: {
              display: false
            },
            ticks: {
              fontColor: labelColor
            }
          }
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: gridLineColor,
              zeroLineColor: gridLineColor
            },
            ticks: {
              stepSize: 0.25,
              min: 0,
              max: 1,
              fontColor: labelColor
            }
          }
        ]
      }
    },
    data = {
      labels: [
        'AC',
        'AM',
        'AU',
        'AT',
        'CM',
        'IA',
        'IR',
        'MA',
        'MP',
        'PS',
        'PE',
        'RE',
        'RM',
        'CA',
        'SA',
        'SC',
        'SI'
      ],
      datasets: [
        {
          data: [0.3, 0.75, 0, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          backgroundColor: successColorShade,
          label: 'Processes',
          borderColor: 'transparent',
          maxbarThickness: 15
        },
        {
          data: [0.35, 0.5, 0, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          backgroundColor: successColorShade2,
          label: 'Practices',
          borderColor: 'transparent',
          maxbarThickness: 15
        }
      ]
    }

  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
        <CardTitle tag='h4'>Compliance Per Domain</CardTitle>
      </CardHeader>
      <CardBody>
        <div style={{ height: '400px' }}>
          <Bar data={data} options={options} height={400} />
        </div>
      </CardBody>
    </Card>
  )
}

export default ChartjsBarChart
