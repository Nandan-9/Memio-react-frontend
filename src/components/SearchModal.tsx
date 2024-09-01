import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useRecoilState } from 'recoil';
import { modalState } from '../store/count';
import { SearchBox } from './SearchBox';

const style = {
  position: 'absolute' as 'absolute',
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height : 650,
  bgcolor: 'rgb(7, 10, 14)',
  border: '1px solid #333333',
  borderRadius : 2,
  boxShadow: 50,
  color : "white",
  p: 4,
};





export default function SearchModal() {
  
  const [open, setOpen] = useRecoilState(modalState);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        
        onClose={handleClose}
      >
        <Box sx={style }>
          <SearchBox/>
        </Box>
      </Modal>
    </div>
  );
}
