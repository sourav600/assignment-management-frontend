import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {getUserList} from "../../ReduxToolkit/AuthSlice"
import { assignedTaskToUser } from '../../ReduxToolkit/TaskSlice';
import { useLocation } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};

const tasks = [1,1,1,1]

export default function UserList({ handleClose, open }) {

  const dispatch = useDispatch();
  const {auth} = useSelector(store=>store);
  const location = useLocation();
  const queryParams=new URLSearchParams(location.search);
  const taskId=queryParams.get("taskId");

  React.useEffect((item)=>{
    dispatch(getUserList(localStorage.getItem("jwt")))
  },[])

  const handleAssignedTask=(user)=>{
    dispatch(assignedTaskToUser({userId:user.id, taskId:taskId}));
  }
  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {
            auth.users.map((item, index) =>
              <>
                <div className='flex items-center
          justify-between w-full'>
                  <div>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqRQUcxrL6WYZeeluHrWVGHXtIZx0VWCc8w&s' />
                      </ListItemAvatar>
                      <ListItemText
                        secondary={`@${item.fullName.split(" ").join("_").toLowerCase()}`}
                        primary={item.fullName} />
                    </ListItem>
                  </div>
                  <div>
                    <Button onClick={()=>handleAssignedTask(item)} className='customButton'>Select</Button>
                  </div>

                </div>
                {index!==tasks.length-1 && <Divider variant='inset' />}
              </>
            )
          }
        </Box>
      </Modal>
    </div>
  );
}

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserList } from "../../ReduxToolkit/AuthSlice";
// import { assignedTaskToUser } from '../../ReduxToolkit/TaskSlice';
// import { useLocation } from 'react-router-dom';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   boxShadow: 24,
//   p: 2,
// };

// const tasks = [1, 1, 1, 1];

// export default function UserList({ handleClose, open }) {
//   const dispatch = useDispatch();
//   const { auth } = useSelector(store => store);
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const taskId = queryParams.get("taskId");

//   const [selectedUserId, setSelectedUserId] = React.useState(null);

//   React.useEffect(() => {
//     dispatch(getUserList(localStorage.getItem("jwt")));
//   }, [dispatch]);

//   const handleAssignedTask = (user) => {
//     dispatch(assignedTaskToUser({ userId: user.id, taskId:taskId }));
//     setSelectedUserId(user.id);
//   };

//   return (
//     <div>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           {auth.users.map((item, index) => (
//             <React.Fragment key={item.id}>
//               <div className='flex items-center justify-between w-full'>
//                 <div>
//                   <ListItem>
//                     <ListItemAvatar>
//                       <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqRQUcxrL6WYZeeluHrWVGHXtIZx0VWCc8w&s' />
//                     </ListItemAvatar>
//                     <ListItemText
//                       secondary={`@${item.fullName.split(" ").join("_").toLowerCase()}`}
//                       primary={item.fullName} />
//                   </ListItem>
//                 </div>
//                 <div>
//                   <Button
//                     onClick={() => handleAssignedTask(item)}
//                     className='customButton'
//                   >
//                     {selectedUserId === item.id ? "Assigned" : "Select"}
//                   </Button>
//                 </div>
//               </div>
//               {index !== tasks.length - 1 && <Divider variant='inset' />}
//             </React.Fragment>
//           ))}
//         </Box>
//       </Modal>
//     </div>
//   );
// }
