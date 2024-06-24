import React from 'react'
import Button from '@mui/material/Button';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const SubmissionCard = () => {
    const handleAcceptDecline=(status)=>{
        console.log(status)

    }
  return (
    <div className='rounded-md bg-black p-5 flex items-center justify-between'>
        <div className='space-y-2'>
            <div className='flex items-center gap-2'>
                <span>Github: </span>
                <div className='flex items-center gap-2 text-[#c24dd0]'>
                    <InsertLinkIcon/>
                    <a href="https://github.com/sourav600" target='_blank' rel='noopener noreferrer'>
                        Go to Link
                    </a>
                </div>
            </div>
            <div className=' flex items-center gap-2 text-xs'>
                <p>Submission time :</p>
                <p className='text-gray-400'> 2024-01-18t22:1539.517343</p>

            </div>
        </div>
        <div>
            {
                true? <div className='flex gap-5'>
                    <div className='text-green-500'>
                        <IconButton color="success" onClick={()=>handleAcceptDecline("ACCEPTED")}>
                            <CheckIcon/>
                        </IconButton>
                    </div>
                    <div className='text-red-500'>
                        <IconButton color="error" onClick={()=>handleAcceptDecline("DECLINED")}>
                            <CloseIcon/>
                        </IconButton>

                    </div>


                </div> : <Button color={true?"success":"error"} size="small" variant='outlined'>Accepted</Button>
            }
        </div>
    </div>
  )
}

export default SubmissionCard