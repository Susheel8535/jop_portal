import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {Badge} from "@/components/ui/badge"
import { useNavigate } from 'react-router-dom'

const AppliedJobTable = () => {
    return (
        <div>
            <Table>
                <TableCaption>A list of your applied jobs</TableCaption>

                <TableHeader>
                    <TableRow>
                        <TableHead>Data</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className='text-right'>Status</TableHead>


                    </TableRow>


                </TableHeader>
                <TableBody>
                    {
                        [1,2].map((item, index)=>(
                            <TableRow key={index}>
                                <TableCell>19-02-2026</TableCell>
                                 <TableCell>Frontend Deveoper</TableCell>
                                  <TableCell>Google</TableCell>
                                   <TableCell className='text-right'><Badge>selected</Badge></TableCell>

                            </TableRow>
                        ))
                    }
                </TableBody>


            </Table>
        </div>
    )
}

export default AppliedJobTable