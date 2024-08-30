import {toast} from 'react-toastify';

const handleSuccess = (msg) => {
    toast.success(msg, {    // This part will show green
        position: 'top-center'

    })
    
}
const handleError = (msg) => {
    toast.error(msg, {   // This part will show red
        position: 'top-center'

    })
    
}
 
export { handleSuccess, handleError};