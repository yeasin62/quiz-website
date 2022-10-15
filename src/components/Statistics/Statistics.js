import axios from 'axios';
import './Statistics.css';
import React, { PureComponent, useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data => {
            const quizLoaded = data.data.data;
            const quizData = quizLoaded.map(quiz => {
                const quizName = quiz.name;
                const totalQuiz = quiz.total;
                const totalData = {
                    name: quizName,
                    total: totalQuiz
                }
                return totalData;
            })
            setData(quizData);
        })
    },[])
    

    return (
        <div className='stat-container'>
            <h2>Statistics</h2>
            <ResponsiveContainer height={400}>
            <BarChart  data={data}>
            <Bar dataKey="total" fill="#8884d8" />
            <XAxis dataKey="name"></XAxis>
            <YAxis dataKey="total"></YAxis>
            <Tooltip></Tooltip>
            </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;