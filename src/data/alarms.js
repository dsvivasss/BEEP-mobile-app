/* eslint-disable */

export default [
    {
        id: 1,
        time: '12:00',
        type: 'a.m',
        active: true,
        days: [
            {
                day: 'Lunes',
                short: 'Lun'
            },
            {   
                day: 'Martes',
                short: 'Mar'
            },
            {
                day: 'Miercoles',
                short: 'Mie'
            }
        ]
    },
    {
        id: 2,
        time: '01:00',
        type: 'a.m',
        active: false,
        days: [
            {
                day: 'Viernes',
                short: 'Vie'
            },
            {
                day: 'Sábado',
                short: 'Sab'
            },
        ]
    },
    {
        id: 3,
        time: '06:30',
        type: 'p.m',
        active: true,
        days: [
            {
                day: 'Viernes',
                short: 'Vie'
            },
            {
                day: 'Sábado',
                short: 'Sab'
            },
            {
                day: 'Domingo',
                short: 'Dom'
            }
        ]
    }
]
