import React, { useContext } from 'react'
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js'
import { PolarArea } from 'react-chartjs-2'
import { ThemeContext } from '../../context/Theme'

ChartJS.register(RadialLinearScale, ArcElement, LinearScale, Tooltip, Legend)

export default function Chart({ data }) {
    const { darkMode } = useContext(ThemeContext)
    const chartData = {
        labels: ['Instrumentalness', 'Danceability', 'Energy', 'Mood'],
        datasets: [
            {
                label: '# of Votes',
                data: [
                    data?.instrumentalness * 100 || 0,
                    data?.danceability * 100 || 0,
                    data?.energy * 100 || 0,
                    data?.valence * 100 || 0,
                ],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderWidth: 1,
            },
        ],
    }

    return (
        <div className="lg:min-h-screen flex items-center justify-center">
            <div className="w-full sm:w-3/4 md:w-3/4 lg:w-3/4">
                <PolarArea
                    data={chartData}
                    options={{
                        scales: {
                            r: {
                                grid: {
                                    color: darkMode ? 'white' : 'black',
                                },
                            },
                        },
                        color: darkMode ? 'white' : 'black',
                    }}
                />
            </div>
        </div>
    )
}
