import React, { useContext, useState } from 'react'
import { MyContext } from '../components/MyContext'
import ButtonAppBar from '../components/Navbar'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createData(owner_name, pet_name, pet_yas) {
    return { owner_name, pet_name, pet_yas };
}

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
const rows2 = [
    {
        "id": "3",
        "owner_name": "ahmet1",
        "pet_name": "loki1",
        "pet_yas": "12"
    },
    {
        "id": "4",
        "owner_name": "ahmet2",
        "pet_name": "loki2",
        "pet_yas": "13"
    },
    {
        "id": "5",
        "owner_name": "ahmet3",
        "pet_name": "loki3",
        "pet_yas": "13"
    },
    {
        "id": "6",
        "owner_name": "ASa",
        "pet_name": "asAS",
        "pet_yas": "1"
    }
]
function HomePage() {
    const { getPetList } = useContext(MyContext);
    const rows3 = getPetList();
    console.log(rows3[1]);
    return (
        <div>
            <ButtonAppBar/>
        
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Owner Name</TableCell>
                        <TableCell align="right">pet name</TableCell>
                        <TableCell align="right">pet yas</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows2.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.owner_name}
                            </TableCell>
                            <TableCell align="right">{row.pet_name}</TableCell>
                            <TableCell align="right">{row.pet_yas}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}

export default HomePage